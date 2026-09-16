'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchRankedServers } from '@/lib/community-actions';

const TABS = [
  { id: 'votes', label: 'All-time votes' },
  { id: 'today', label: 'Votes today' },
  { id: 'rating', label: 'Top rated' },
  { id: 'peak', label: 'Highest peak' },
];

export default function RankingsClient() {
  const [sort, setSort] = useState('votes');
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      const result = await fetchRankedServers({ sort, limit: 50 });
      if (cancelled) return;
      setServers(result.servers || []);
      setError(result.error);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [sort]);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-wrap gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setSort(tab.id)}
            className={sort === tab.id ? 'btn-primary' : 'btn-ghost'}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {error ? (
        <div className="mb-4 rounded border border-amber-300/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          {error}
        </div>
      ) : null}

      {loading ? <p className="text-sm text-slate-300">Loading rankings...</p> : null}

      {!loading && servers.length === 0 ? (
        <p className="text-sm text-slate-300">No ranking rows yet. Apply the votes migration and cast the first votes from a server page.</p>
      ) : null}

      <div className="overflow-x-auto rounded border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-left text-slate-300">
            <tr>
              <th className="px-4 py-3 font-semibold">#</th>
              <th className="px-4 py-3 font-semibold">Server</th>
              <th className="px-4 py-3 font-semibold">Votes</th>
              <th className="px-4 py-3 font-semibold">Today</th>
              <th className="px-4 py-3 font-semibold">Rating</th>
              <th className="px-4 py-3 font-semibold">Peak</th>
              <th className="px-4 py-3 font-semibold">Type</th>
            </tr>
          </thead>
          <tbody>
            {servers.map((server, index) => (
              <tr key={server.id || server.slug || index} className="border-t border-white/10">
                <td className="px-4 py-3 text-slate-400">{index + 1}</td>
                <td className="px-4 py-3">
                  <Link href={server.slug ? `/servers/${server.slug}` : '/'} className="font-semibold text-white hover:underline">
                    {server.name || server.slug || 'Unknown'}
                  </Link>
                  <div className="text-xs text-slate-400">{[server.location, server.version].filter(Boolean).join(' · ')}</div>
                </td>
                <td className="px-4 py-3 font-bold text-white">{Number(server.vote_count || 0)}</td>
                <td className="px-4 py-3">{Number(server.votes_today || 0)}</td>
                <td className="px-4 py-3">{Number(server.average_rating || 0).toFixed(1)} ({Number(server.review_count || 0)})</td>
                <td className="px-4 py-3">{Number(server.players_peak || 0).toLocaleString()}</td>
                <td className="px-4 py-3 text-slate-300">{server.world_type || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
