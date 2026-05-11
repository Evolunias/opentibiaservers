'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { fetchServerStatus, fetchUserCharacters } from '@/lib/evomaniasActions';

export default function EvomaniasAccount() {
  const router = useRouter();
  const { user, profile, loading, signOut } = useAuth();
  const [serverStatus, setServerStatus] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [characterForm, setCharacterForm] = useState({
    name: '',
    vocation: 'Knight',
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/evomanias/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    // Load server status
    const status = await fetchServerStatus();
    setServerStatus(status.data);

    // Load user characters
    const chars = await fetchUserCharacters(user.id);
    setCharacters(chars.data || []);
  };

  const handleCreateCharacter = async (e) => {
    e.preventDefault();
    // TODO: Implement character creation with API
    setShowCreateModal(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your account...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    router.push('/evomanias');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">My Account</h1>
            <p className="opacity-90">Manage your Evomanias account and characters</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Account Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Information</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-lg font-semibold text-gray-900">{user.email}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Character Name</p>
                    <p className="text-lg font-semibold text-gray-900">{profile?.username || 'Not set'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Account Created</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 font-semibold">Characters</p>
                    <p className="text-2xl font-bold text-blue-900">1</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <p className="text-sm text-purple-600 font-semibold">Status</p>
                    <p className="text-2xl font-bold text-purple-900">Active</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-sm text-green-600 font-semibold">Premium</p>
                    <p className="text-2xl font-bold text-green-900">No</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-sm text-amber-600 font-semibold">Level</p>
                    <p className="text-2xl font-bold text-amber-900">1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Server Status */}
            {serverStatus && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Server Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 p-4 rounded-lg">
                    <p className="text-sm text-green-600 font-semibold">Server Status</p>
                    <p className="text-3xl font-bold text-green-900">
                      {serverStatus.serverStatus === 'online' ? '🟢 Online' : '🔴 Offline'}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 font-semibold">Players Online</p>
                    <p className="text-3xl font-bold text-blue-900">{serverStatus.playersOnline}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Characters Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Your Characters</h2>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
                >
                  + Create Character
                </button>
              </div>

              {characters.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                  <p className="text-gray-600 mb-4">You don't have any characters yet.</p>
                  <p className="text-gray-500 text-sm">Create your first character to begin your adventure in Evomanias.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {characters.map((char, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 p-6 rounded-lg hover:shadow-md transition">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{char.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <p>Level <span className="font-semibold text-gray-900">{char.level}</span></p>
                        <p>Vocation <span className="font-semibold text-gray-900">{char.vocation}</span></p>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-sm font-semibold">Delete Character</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Create Character Modal */}
            {showCreateModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Character</h3>
                  <form onSubmit={handleCreateCharacter} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Character Name</label>
                      <input
                        type="text"
                        value={characterForm.name}
                        onChange={(e) => setCharacterForm({ ...characterForm, name: e.target.value })}
                        placeholder="Enter character name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Vocation</label>
                      <select
                        value={characterForm.vocation}
                        onChange={(e) => setCharacterForm({ ...characterForm, vocation: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="Knight">Knight</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Paladin">Paladin</option>
                      </select>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        Create
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCreateModal(false)}
                        className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Navigation Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link
                href="/evomanias/highscores"
                className="bg-blue-50 border border-blue-200 p-4 rounded-lg hover:bg-blue-100 transition text-center"
              >
                <p className="font-semibold text-blue-900">View Highscores</p>
                <p className="text-sm text-blue-700">See the top players</p>
              </Link>
              <Link
                href="/evomanias"
                className="bg-purple-50 border border-purple-200 p-4 rounded-lg hover:bg-purple-100 transition text-center"
              >
                <p className="font-semibold text-purple-900">Return to Home</p>
                <p className="text-sm text-purple-700">Back to main page</p>
              </Link>
              <button
                onClick={handleSignOut}
                className="bg-red-50 border border-red-200 p-4 rounded-lg hover:bg-red-100 transition text-center cursor-pointer"
              >
                <p className="font-semibold text-red-900">Sign Out</p>
                <p className="text-sm text-red-700">Exit your account</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
