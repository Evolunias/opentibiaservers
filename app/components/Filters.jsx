'use client';

import { useState } from 'react';

export default function Filters({ onFiltersChange, onSearch }) {
  const [search, setSearch] = useState('');
  const [worldType, setWorldType] = useState('');
  const [location, setLocation] = useState('');
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleFilterChange = () => {
    onFiltersChange({
      world_type: worldType || undefined,
      location: location || undefined,
      is_online: showOnlineOnly ? true : undefined,
      search,
    });
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-white mb-4">Filters & Search</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">Search by Name or IP</label>
          <input
            type="text"
            placeholder="Search servers..."
            value={search}
            onChange={handleSearchChange}
            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        {/* World Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">World Type</label>
          <select
            value={worldType}
            onChange={(e) => {
              setWorldType(e.target.value);
              handleFilterChange();
            }}
            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
          >
            <option value="">All Types</option>
            <option value="PVP">PVP</option>
            <option value="Non-PVP">Non-PVP</option>
            <option value="PVP-Enforced">PVP-Enforced</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              handleFilterChange();
            }}
            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
          >
            <option value="">All Locations</option>
            <option value="USA">USA</option>
            <option value="Europe">Europe</option>
            <option value="Germany">Germany</option>
            <option value="Brazil">Brazil</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Online Only */}
        <div className="flex items-end">
          <label className="flex items-center gap-2 text-gray-300 cursor-pointer h-10 px-3 bg-slate-700 border border-slate-600 rounded hover:border-cyan-500 transition-colors">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => {
                setShowOnlineOnly(e.target.checked);
                handleFilterChange();
              }}
              className="w-4 h-4"
            />
            <span className="text-sm font-medium">Online Only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
