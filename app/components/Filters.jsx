'use client';

import { useState } from 'react';

const initialFilters = {
  search: '',
  source: '',
  world_type: '',
  location: '',
  version: '',
  min_players: '',
  sort: 'players',
  is_online: true,
};

export default function Filters({ onFiltersChange, onSearch }) {
  const [filters, setFilters] = useState(initialFilters);

  const applyFilters = (nextFilters) => {
    setFilters(nextFilters);
    onFiltersChange({
      search: nextFilters.search || undefined,
      source: nextFilters.source || undefined,
      world_type: nextFilters.world_type || undefined,
      location: nextFilters.location || undefined,
      version: nextFilters.version || undefined,
      min_players: nextFilters.min_players || undefined,
      sort: nextFilters.sort || 'players',
      is_online: nextFilters.is_online ? true : undefined,
    });
  };

  const update = (key, value) => {
    const nextFilters = { ...filters, [key]: value };
    applyFilters(nextFilters);
    if (key === 'search') onSearch(value);
  };

  const clearFilters = () => {
    applyFilters(initialFilters);
    onSearch('');
  };

  return (
    <div className="filter-panel mb-6 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-white mb-1">Find Servers</h2>
          <p className="text-xs text-slate-400">Search by name, host, country, client, source, and live population.</p>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          className="btn-ghost"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-3">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-300 mb-1">Search</label>
          <input
            type="text"
            placeholder="Server name, host, or description"
            value={filters.search}
            onChange={(event) => update('search', event.target.value)}
            className="form-control w-full"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Source</label>
          <select
            value={filters.source}
            onChange={(event) => update('source', event.target.value)}
            className="form-control w-full"
          >
            <option value="">All Sources</option>
            <option value="otservlist.org">otservlist.org</option>
            <option value="otland.net">otland.net</option>
            <option value="user_submission">Submitted</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">PVP Type</label>
          <select
            value={filters.world_type}
            onChange={(event) => update('world_type', event.target.value)}
            className="form-control w-full"
          >
            <option value="">All Types</option>
            <option value="PVP">PVP</option>
            <option value="Non-PVP">Non-PVP</option>
            <option value="PVP-Enforced">PVP-Enforced</option>
            <option value="FUN">FUN</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Location</label>
          <select
            value={filters.location}
            onChange={(event) => update('location', event.target.value)}
            className="form-control w-full"
          >
            <option value="">All Locations</option>
            <option value="Brazil">Brazil</option>
            <option value="Poland">Poland</option>
            <option value="USA">USA</option>
            <option value="Sweden">Sweden</option>
            <option value="Germany">Germany</option>
            <option value="Mexico">Mexico</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Client</label>
          <select
            value={filters.version}
            onChange={(event) => update('version', event.target.value)}
            className="form-control w-full"
          >
            <option value="">Any Client</option>
            <option value="15.2">15.2</option>
            <option value="15.0">15.0</option>
            <option value="14.0">14.0</option>
            <option value="10.98">10.98</option>
            <option value="8.6">8.6</option>
            <option value="7.4">7.4</option>
            <option value="n/a">n/a</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Min Online</label>
          <input
            type="number"
            min="0"
            value={filters.min_players}
            onChange={(event) => update('min_players', event.target.value)}
            placeholder="0"
            className="form-control w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mt-4 pt-4 border-t border-white/10">
        <label className="flex items-center gap-2 text-slate-300 cursor-pointer font-semibold text-sm">
          <input
            type="checkbox"
            checked={filters.is_online}
            onChange={(event) => update('is_online', event.target.checked)}
            className="w-4 h-4"
          />
          <span>Online only</span>
        </label>

        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-300">Sort</label>
          <select
            value={filters.sort}
            onChange={(event) => update('sort', event.target.value)}
            className="form-control"
          >
            <option value="players">Players online</option>
            <option value="rating">Rating</option>
            <option value="points">Points</option>
            <option value="uptime">Uptime</option>
            <option value="newest">Recently seen</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </div>
  );
}
