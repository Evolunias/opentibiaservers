'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { getServerPath } from '@/lib/server-paths';

function accountTypeLabel(value) {
  switch (value) {
    case 'server_owner':
      return 'Server Owner';
    case 'community_manager':
      return 'Community Manager';
    case 'admin':
      return 'Admin';
    case 'player':
    default:
      return 'Player';
  }
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, loading, signOut } = useAuth();
  const [servers, setServers] = useState([]);
  const [claims, setClaims] = useState([]);
  const [loadingDashboard, setLoadingDashboard] = useState(true);

  const loadDashboard = useCallback(async () => {
    if (!user) return;

    setLoadingDashboard(true);

    try {
      const [{ data: serverRows, error: serverError }, { data: claimRows, error: claimError }] = await Promise.all([
        supabase
          .from('servers')
          .select('*')
          .or(`user_id.eq.${user.id},owner_user_id.eq.${user.id}`)
          .order('updated_at', { ascending: false }),
        supabase
          .from('server_claims')
          .select('*, servers(id,name,ip,host,port,source,source_id)')
          .eq('claimant_user_id', user.id)
          .order('created_at', { ascending: false }),
      ]);

      if (serverError) throw serverError;
      if (claimError) throw claimError;

      setServers(serverRows || []);
      setClaims(claimRows || []);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoadingDashboard(false);
    }
  }, [user]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    } else if (user) {
      loadDashboard();
    }
  }, [user, loading, router, loadDashboard]);

  const stats = useMemo(() => ({
    listings: servers.length,
    claimed: servers.filter((server) => server.claim_status === 'claimed').length,
    verified: servers.filter((server) => server.verification_status === 'verified').length,
    pendingClaims: claims.filter((claim) => claim.status === 'pending').length,
  }), [servers, claims]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const handleDeleteServer = async (serverId) => {
    if (!confirm('Delete this listing from your account?')) return;

    try {
      const { error } = await supabase
        .from('servers')
        .delete()
        .eq('id', serverId)
        .or(`user_id.eq.${user.id},owner_user_id.eq.${user.id}`);

      if (error) throw error;
      setServers((current) => current.filter((server) => server.id !== serverId));
    } catch (error) {
      console.error('Error deleting server:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-950">
              Back to directory
            </Link>
            <h1 className="text-4xl font-bold text-gray-950 mt-2">Account Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage listings, claims, reviews, and community activity.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/submit-server" className="px-4 py-2 bg-gray-950 text-white font-semibold rounded hover:opacity-85">
              Submit Server
            </Link>
            <Link href="/community" className="px-4 py-2 bg-white text-gray-900 font-semibold border border-gray-300 rounded hover:bg-gray-50">
              Community
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="px-4 py-2 bg-white text-gray-700 font-semibold border border-gray-300 rounded hover:bg-gray-50"
            >
              Sign Out
            </button>
          </div>
        </div>

        <section className="bg-white border border-gray-200 rounded p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gray-950 rounded flex items-center justify-center text-white text-xl font-bold">
              {user.email?.[0]?.toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950">{profile?.display_name || profile?.username || 'User'}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-1">{accountTypeLabel(profile?.account_type)} account</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Stat label="Managed Listings" value={stats.listings} />
          <Stat label="Claimed" value={stats.claimed} />
          <Stat label="Verified" value={stats.verified} />
          <Stat label="Pending Claims" value={stats.pendingClaims} />
        </section>

        <section className="bg-white border border-gray-200 rounded overflow-hidden mb-6">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-950">Managed Listings</h2>
            <p className="text-sm text-gray-600">Listings you submitted or that have been assigned to your account.</p>
          </div>

          {loadingDashboard ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-3" />
                <p className="text-gray-600">Loading dashboard...</p>
              </div>
            </div>
          ) : servers.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-600 mb-4">No managed listings yet.</p>
              <Link href="/submit-server" className="inline-block px-4 py-2 bg-gray-950 text-white font-semibold rounded hover:opacity-85">
                Submit Your First Server
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Server</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Claim</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Verification</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Rating</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Monitor</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {servers.map((server) => (
                    <tr key={server.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Link href={getServerPath(server)} className="text-blue-700 hover:underline font-semibold">
                          {server.name}
                        </Link>
                        <div className="text-xs text-gray-500">{server.host || server.ip}:{server.port || 7171}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{server.claim_status || 'unclaimed'}</td>
                      <td className="px-6 py-4 text-gray-700">{server.verification_status || 'unverified'}</td>
                      <td className="px-6 py-4 text-gray-700">
                        {Number(server.average_rating || 0).toFixed(2)} ({server.review_count || 0})
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {server.last_monitor_status || 'unknown'}
                        {server.last_response_time_ms ? ` / ${server.last_response_time_ms}ms` : ''}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-3">
                          <Link href={getServerPath(server)} className="text-blue-700 hover:underline font-semibold">
                            View
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDeleteServer(server.id)}
                            className="text-red-700 hover:underline font-semibold"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="bg-white border border-gray-200 rounded overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-950">Claim Requests</h2>
            <p className="text-sm text-gray-600">Claim imported listings by proving ownership or management access.</p>
          </div>

          {claims.length === 0 ? (
            <div className="px-6 py-8 text-gray-600 text-sm">No claim requests yet. Open an imported listing and use the claim form.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Server</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Role</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Proof</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {claims.map((claim) => (
                    <tr key={claim.id}>
                      <td className="px-6 py-4">
                        {claim.servers?.id ? (
                          <Link href={getServerPath(claim.servers)} className="text-blue-700 hover:underline font-semibold">
                            {claim.servers.name}
                          </Link>
                        ) : (
                          'Deleted listing'
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{claim.claimant_role}</td>
                      <td className="px-6 py-4 text-gray-700">{claim.proof_type}</td>
                      <td className="px-6 py-4 text-gray-700">{claim.status}</td>
                      <td className="px-6 py-4 text-gray-700">{new Date(claim.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded p-5">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-3xl font-bold text-gray-950">{value}</p>
    </div>
  );
}
