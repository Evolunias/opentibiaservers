'use client';

import { useState } from 'react';

const initialFilters = {
  search: '',
  world_type: '',
  location: '',
  version: '',
  min_players: '',
  min_rating: '',
  online_only: '',
  sort: 'peak',
};

export default function Filters({ onFiltersChange, onSearch }) {
  const [filters, setFilters] = useState(initialFilters);

  const applyFilters = (nextFilters) => {
    setFilters(nextFilters);
    onFiltersChange({
      search: nextFilters.search || undefined,
      world_type: nextFilters.world_type || undefined,
      location: nextFilters.location || undefined,
      version: nextFilters.version || undefined,
      min_players: nextFilters.min_players || undefined,
      min_rating: nextFilters.min_rating || undefined,
      online_only: nextFilters.online_only || undefined,
      sort: nextFilters.sort || 'peak',
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
          <p className="text-xs text-slate-400">
            Search by name or host, then narrow by PVP type, region, client, rating, online status, and votes.
          </p>
        </div>
        <button type="button" onClick={clearFilters} className="btn-ghost">
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        <div className="md:col-span-2 xl:col-span-2">
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
          <label className="block text-xs font-semibold text-slate-300 mb-1">PVP Type</label>
          <select
            value={filters.world_type}
            onChange={(event) => update('world_type', event.target.value)}
            className="form-control w-full"
          >
            <option value="">All Types</option>
            <option value="PVP">PVP</option>
            <option value="Non-PVP">Non-PVP</option>
            <option value="Optional PvP">Optional PvP</option>
            <option value="Open PvP">Open PvP</option>
            <option value="Retro Open PvP">Retro Open PvP</option>
            <option value="Retro Hardcore PvP">Retro Hardcore PvP</option>
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
            <option value="Germany">Germany</option>
            <option value="Sweden">Sweden</option>
            <option value="Netherlands">Netherlands</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="Chile">Chile</option>
            <option value="Argentina">Argentina</option>
            <option value="Colombia">Colombia</option>
            <option value="Spain">Spain</option>
            <option value="France">France</option>
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
            <option value="15.1">15.1</option>
            <option value="15.0">15.0</option>
            <option value="14.12">14.12</option>
            <option value="14.0">14.0</option>
            <option value="13.40">13.40</option>
            <option value="12.91">12.91</option>
            <option value="12.40">12.40</option>
            <option value="10.98">10.98</option>
            <option value="8.60">8.60</option>
            <option value="8.6">8.6</option>
            <option value="8.1">8.1</option>
            <option value="8.0">8.0</option>
            <option value="7.72">7.72</option>
            <option value="7.6">7.6</option>
            <option value="7.4">7.4</option>
            <option value="n/a">n/a</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Min Highest Count</label>
          <input
            type="number"
            min="0"
            value={filters.min_players}
            onChange={(event) => update('min_players', event.target.value)}
            placeholder="0"
            className="form-control w-full"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Min Rating</label>
          <select
            value={filters.min_rating}
            onChange={(event) => update('min_rating', event.target.value)}
            className="form-control w-full"
          >
            <option value="">Any rating</option>
            <option value="4.5">4.5+</option>
            <option value="4">4.0+</option>
            <option value="3.5">3.5+</option>
            <option value="3">3.0+</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Status</label>
          <select
            value={filters.online_only}
            onChange={(event) => update('online_only', event.target.value)}
            className="form-control w-full"
          >
            <option value="">All statuses</option>
            <option value="1">Online only</option>
            <option value="0">Offline / unknown</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-300">Sort</label>
          <select
            value={filters.sort}
            onChange={(event) => update('sort', event.target.value)}
            className="form-control"
          >
            <option value="peak">Highest player count</option>
            <option value="votes">Most votes</option>
            <option value="votes_today">Votes today</option>
            <option value="rating">Rating</option>
            <option value="uptime">Uptime</option>
            <option value="newest">Recently updated</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </div>
  );
}
