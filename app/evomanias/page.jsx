'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useEvomaniasAuth } from '../context/EvomaniasAuthContext';

export default function EvomaniasHome() {
  const { account } = useEvomaniasAuth();
  const [topPlayers, setTopPlayers] = useState([]);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [serverStats, setServerStats] = useState({
    online: 0,
    characters: 0,
    guilds: 0,
    uptime: '99.9%',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServerData();
  }, []);

  const loadServerData = async () => {
    try {
      // Fetch top 5 players
      const response = await fetch('/api/evomanias/characters?action=highscores');
      const data = await response.json();
      
      const players = data.characters || [];
      setTopPlayers(players.slice(0, 5));
      setTotalPlayers(players.length);
      
      // Calculate server stats
      const onlineCount = players.filter(p => p.status === 'active').length;
      setServerStats(prev => ({
        ...prev,
        online: onlineCount,
        characters: players.length,
      }));
    } catch (error) {
      console.error('Error loading server data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold">
              ⚔️ Welcome to EVOMANIAS
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            EVOMANIAS
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A premium Tibia experience. Create your account, join thousands of players, and become a legend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {!account ? (
              <>
                <Link
                  href="/evomanias/register"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Create Account
                </Link>
                <Link
                  href="/evomanias/login"
                  className="px-8 py-3 border-2 border-purple-500 text-purple-300 rounded-lg font-semibold hover:bg-purple-600/10 transition"
                >
                  Sign In
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/evomanias/account"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                >
                  My Account
                </Link>
                <Link
                  href="/evomanias/highscores"
                  className="px-8 py-3 border-2 border-purple-500 text-purple-300 rounded-lg font-semibold hover:bg-purple-600/10 transition"
                >
                  Highscores
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Server Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-600/50 transition">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {loading ? '...' : serverStats.online}
            </div>
            <p className="text-gray-400 text-sm">Players Online</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-600/50 transition">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {loading ? '...' : serverStats.characters}
            </div>
            <p className="text-gray-400 text-sm">Total Characters</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-600/50 transition">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {serverStats.uptime}
            </div>
            <p className="text-gray-400 text-sm">Server Uptime</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-emerald-600/50 transition">
            <div className="text-3xl font-bold text-emerald-400 mb-2">🟢 Online</div>
            <p className="text-gray-400 text-sm">Server Status</p>
          </div>
        </div>
      </section>

      {/* Top Players Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Top 5 Players</h2>
          <p className="text-gray-400">The strongest players on EVOMANIAS</p>
        </div>

        {loading ? (
          <div className="text-center py-8 text-gray-400">Loading top players...</div>
        ) : topPlayers.length === 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center text-gray-400">
            No players yet. Be the first to create a character!
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Character</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Vocation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Experience</th>
                </tr>
              </thead>
              <tbody>
                {topPlayers.map((player, idx) => (
                  <tr key={player.id} className={`border-t border-gray-800 ${idx % 2 === 0 ? 'bg-gray-900/50' : ''} hover:bg-gray-800/50 transition`}>
                    <td className="px-6 py-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                        idx === 0 ? 'bg-yellow-600' :
                        idx === 1 ? 'bg-gray-500' :
                        idx === 2 ? 'bg-orange-700' :
                        'bg-gray-700'
                      }`}>
                        {idx + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/evomanias/character/${player.id}`} className="text-purple-400 hover:text-purple-300 transition font-semibold">
                        {player.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{player.vocation}</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-600/20 border border-blue-600/50 px-3 py-1 rounded text-sm font-semibold text-blue-400">
                        {player.level || 1}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{(player.experience || 0).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/evomanias/highscores"
            className="inline-block px-8 py-3 border-2 border-purple-600 text-purple-400 rounded-lg font-semibold hover:bg-purple-600/10 transition"
          >
            View Full Highscores →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Why Play EVOMANIAS?</h2>
          <p className="text-gray-400">Everything you need for an epic adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-purple-600/50 transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">⚔️</div>
            <h3 className="text-xl font-bold mb-2">Epic Adventure</h3>
            <p className="text-gray-400 text-sm">Explore vast dungeons, face dangerous creatures, and discover treasures beyond imagination.</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-blue-600/50 transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">👥</div>
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-gray-400 text-sm">Join a vibrant community of players. Form guilds, engage in PvP, and make lasting friendships.</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-cyan-600/50 transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition">💰</div>
            <h3 className="text-xl font-bold mb-2">Balanced Economy</h3>
            <p className="text-gray-400 text-sm">Experience fair gameplay with balanced rates and custom content tailored for the best experience.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your account now and become part of the EVOMANIAS community. Your adventure awaits.
          </p>
          {!account ? (
            <Link
              href="/evomanias/register"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Create Account Now
            </Link>
          ) : (
            <Link
              href="/evomanias/account"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Go to Your Account
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
