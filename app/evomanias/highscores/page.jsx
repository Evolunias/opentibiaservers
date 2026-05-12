'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const vocations = ['All', 'Knight', 'Sorcerer', 'Cleric', 'Ranger', 'Paladin'];

export default function Highscores() {
  const [highscores, setHighscores] = useState([]);
  const [selectedVocation, setSelectedVocation] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHighscores();
  }, [selectedVocation, searchTerm]);

  const loadHighscores = async () => {
    setLoading(true);
    try {
      let query = '/api/evomanias/characters?action=highscores';
      if (selectedVocation !== 'All') {
        query += `&vocation=${selectedVocation}`;
      }

      const response = await fetch(query);
      const data = await response.json();
      
      let results = data.characters || [];
      
      if (searchTerm) {
        results = results.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      
      setHighscores(results);
    } catch (error) {
      console.error('Error loading highscores:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Highscores</h1>
            <p className="opacity-90">Top players in Evomanias</p>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 border-b p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Character</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by character name..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Vocation Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vocation</label>
                <select
                  value={selectedVocation}
                  onChange={(e) => setSelectedVocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {vocations.map(voc => (
                    <option key={voc} value={voc}>{voc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading highscores...</p>
              </div>
            </div>
          )}

          {/* Highscores Table */}
          {!loading && (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rank</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Character</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Vocation</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Level</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {highscores.map((entry, idx) => (
                      <tr
                        key={entry.id}
                        className={`border-b transition ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                              idx === 0 ? 'bg-yellow-500' :
                              idx === 1 ? 'bg-gray-400' :
                              idx === 2 ? 'bg-amber-600' :
                              'bg-gray-500'
                            }`}>
                              {idx + 1}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          <Link href={`/evomanias/character/${entry.id}`} className="text-purple-600 hover:underline">
                            {entry.name}
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{entry.vocation}</td>
                        <td className="px-6 py-4">
                          <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                            {entry.level || 1}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{(entry.experience || 0).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {highscores.length === 0 && (
                <div className="text-center py-12 bg-gray-50">
                  <p className="text-gray-600">No highscores match your filters</p>
                </div>
              )}
            </>
          )}

          {/* Footer Navigation */}
          <div className="bg-gray-50 border-t p-6 flex justify-between">
            <Link
              href="/evomanias"
              className="text-purple-600 font-semibold hover:underline"
            >
              ← Back to Home
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
