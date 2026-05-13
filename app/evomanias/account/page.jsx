'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEvomaniasAuth } from '../../context/EvomaniasAuthContext';

export default function EvomaniasAccount() {
  const router = useRouter();
  const { account, logout } = useEvomaniasAuth();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [characterForm, setCharacterForm] = useState({
    name: '',
    vocation: 'Knight',
  });
  const [createError, setCreateError] = useState('');
  const [createLoading, setCreateLoading] = useState(false);

  useEffect(() => {
    if (!account) {
      router.push('/evomanias/login');
    } else {
      loadCharacters();
    }
  }, [account, router]);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/evomanias/characters?action=list&accountId=${account.id}`);
      const data = await response.json();
      setCharacters(data.characters || []);
    } catch (error) {
      console.error('Error loading characters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCharacter = async (e) => {
    e.preventDefault();
    setCreateError('');
    setCreateLoading(true);

    try {
      const response = await fetch('/api/evomanias/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          accountId: account.id,
          name: characterForm.name,
          vocation: characterForm.vocation,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setCharacters([...characters, data.character]);
      setCharacterForm({ name: '', vocation: 'Knight' });
      setShowCreateModal(false);
    } catch (error) {
      setCreateError(error.message || 'Failed to create character');
    } finally {
      setCreateLoading(false);
    }
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

  if (!account) {
    return null;
  }

  const handleSignOut = () => {
    logout();
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
                    <p className="text-lg font-semibold text-gray-900">{account.email}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Account Name</p>
                    <p className="text-lg font-semibold text-gray-900">{account.name}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Account Status</p>
                    <p className="text-lg font-semibold text-green-600">Active</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 font-semibold">Characters</p>
                    <p className="text-2xl font-bold text-blue-900">{characters.length}</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <p className="text-sm text-purple-600 font-semibold">Total Level</p>
                    <p className="text-2xl font-bold text-purple-900">
                      {characters.reduce((sum, c) => sum + (c.level || 1), 0)}
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-sm text-green-600 font-semibold">World</p>
                    <p className="text-2xl font-bold text-green-900">Evomanias</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-sm text-amber-600 font-semibold">Status</p>
                    <p className="text-2xl font-bold text-amber-900">Online</p>
                  </div>
                </div>
              </div>
            </div>

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
                  {characters.map((char) => (
                    <Link
                      key={char.id}
                      href={`/evomanias/character/${char.id}`}
                      className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 p-6 rounded-lg hover:shadow-md transition cursor-pointer"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{char.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <p>Level <span className="font-semibold text-gray-900">{char.level || 1}</span></p>
                        <p>Vocation <span className="font-semibold text-gray-900">{char.vocation}</span></p>
                        <p>Experience <span className="font-semibold text-gray-900">{(char.experience || 0).toLocaleString()}</span></p>
                      </div>
                      <p className="text-xs text-gray-500">Click to view details</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Create Character Modal */}
            {showCreateModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Character</h3>

                  {createError && (
                    <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm">
                      {createError}
                    </div>
                  )}

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
                        disabled={createLoading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Choose Your Class</label>
                      <select
                        value={characterForm.vocation}
                        onChange={(e) => setCharacterForm({ ...characterForm, vocation: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        disabled={createLoading}
                      >
                        <option value="Knight">🗡️ Knight - Master of defense and combat</option>
                        <option value="Paladin">🏹 Paladin - Balance magic and melee</option>
                        <option value="Druid">🌿 Druid - Master of nature and healing</option>
                        <option value="Sorcerer">⚡ Sorcerer - Master of spells</option>
                      </select>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        disabled={createLoading}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
                      >
                        {createLoading ? 'Creating...' : 'Create'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCreateModal(false)}
                        disabled={createLoading}
                        className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition disabled:opacity-50"
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
