'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { fetchCharacter } from '@/lib/evomaniasActions';

export default function CharacterDetail() {
  const params = useParams();
  const router = useRouter();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCharacter();
  }, [params.id]);

  const loadCharacter = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await fetchCharacter(params.id);
      if (fetchError) {
        setError('Failed to load character');
        setCharacter(null);
      } else {
        setCharacter(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading character...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !character) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 mb-4">{error || 'Character not found'}</p>
            <Link href="/evomanias/highscores" className="text-purple-600 font-semibold hover:underline">
              Back to Highscores
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const vocations = {
    Knight: { color: 'from-red-500 to-red-600', icon: '⚔️' },
    Sorcerer: { color: 'from-purple-500 to-purple-600', icon: '🔮' },
    Cleric: { color: 'from-yellow-500 to-yellow-600', icon: '✨' },
    Ranger: { color: 'from-green-500 to-green-600', icon: '🏹' },
    Paladin: { color: 'from-blue-500 to-blue-600', icon: '⚡' },
  };

  const vocInfo = vocations[character.vocation] || vocations.Knight;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header with gradient background */}
          <div className={`bg-gradient-to-r ${vocInfo.color} text-white p-8`}>
            <Link href="/evomanias/highscores" className="text-white/80 hover:text-white text-sm mb-4 inline-block">
              ← Back to Highscores
            </Link>
            <div className="flex items-start justify-between">
              <div>
                <div className="text-5xl mb-3">{vocInfo.icon}</div>
                <h1 className="text-4xl font-bold mb-2">{character.name}</h1>
                <p className="text-xl opacity-90">{character.vocation}</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold">{character.level}</div>
                <p className="text-sm opacity-90">Level</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 border-b">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-lg">
                <p className="text-sm text-blue-600 font-semibold mb-1">Experience</p>
                <p className="text-3xl font-bold text-blue-900">{character.experience?.toLocaleString() || 'N/A'}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-6 rounded-lg">
                <p className="text-sm text-purple-600 font-semibold mb-1">World</p>
                <p className="text-2xl font-bold text-purple-900">{character.world || 'Evomanias'}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 p-6 rounded-lg">
                <p className="text-sm text-green-600 font-semibold mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${character.status === 'alive' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <p className="text-2xl font-bold text-green-900 capitalize">{character.status || 'Alive'}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-6 rounded-lg">
                <p className="text-sm text-amber-600 font-semibold mb-1">Last Login</p>
                <p className="text-lg font-bold text-amber-900">
                  {character.lastLogin 
                    ? new Date(character.lastLogin).toLocaleDateString() 
                    : 'Never'}
                </p>
              </div>
            </div>
          </div>

          {/* Character Info */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Character Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="text-sm text-gray-600 font-semibold mb-1">Created</p>
                <p className="text-lg font-bold text-gray-900">
                  {character.createdAt ? new Date(character.createdAt).toLocaleDateString() : 'Unknown'}
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-600 font-semibold mb-1">Experience Gain Rate</p>
                <p className="text-lg font-bold text-gray-900">1.0x (Default)</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm text-gray-600 font-semibold mb-1">Skill Rate</p>
                <p className="text-lg font-bold text-gray-900">1.0x (Default)</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-sm text-gray-600 font-semibold mb-1">Magic Level Rate</p>
                <p className="text-lg font-bold text-gray-900">1.0x (Default)</p>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-gray-50 border-t p-6 flex justify-between">
            <Link
              href="/evomanias/highscores"
              className="text-purple-600 font-semibold hover:underline"
            >
              ← Highscores
            </Link>
            <Link
              href="/evomanias/account"
              className="text-purple-600 font-semibold hover:underline"
            >
              My Account →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
