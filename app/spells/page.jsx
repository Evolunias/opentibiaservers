'use client';

export const dynamic = 'force-dynamic';

import { useState, useMemo } from 'react';
import spellsData from '@/public/data/spells.json';

export default function SpellsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVocation, setSelectedVocation] = useState('all');
  const [levelRange, setLevelRange] = useState('all');
  const [manaRange, setManaRange] = useState('all');
  const [sortBy, setSortBy] = useState('level');

  const spells = spellsData.spells || [];

  // Calculate stats
  const stats = useMemo(() => {
    if (spells.length === 0) {
      return { totalSpells: 0, minLevel: 0, maxLevel: 0, avgLevel: 0, avgMana: 0 };
    }

    const totalSpells = spells.length;
    const minLevel = Math.min(...spells.map(s => s.level));
    const maxLevel = Math.max(...spells.map(s => s.level));
    const avgLevel = Math.round(spells.reduce((sum, s) => sum + s.level, 0) / totalSpells);
    const totalMana = spells.reduce((sum, s) => sum + (s.mana || 0), 0);
    const avgMana = Math.round(totalMana / totalSpells);

    return { totalSpells, minLevel, maxLevel, avgLevel, avgMana };
  }, [spells]);

  // Filter and sort spells
  const filteredSpells = useMemo(() => {
    let filtered = spells.filter(spell => {
      const matchesSearch = spell.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (spell.description && spell.description.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesVocation = true;
      if (selectedVocation !== 'all') {
        matchesVocation = spell.vocations && spell.vocations.includes(selectedVocation);
      }

      let matchesLevel = true;
      switch(levelRange) {
        case 'beginner': matchesLevel = spell.level <= 100; break;
        case 'early': matchesLevel = spell.level > 100 && spell.level <= 300; break;
        case 'mid': matchesLevel = spell.level > 300 && spell.level <= 700; break;
        case 'advanced': matchesLevel = spell.level > 700 && spell.level <= 1000; break;
        case 'elite': matchesLevel = spell.level > 1000; break;
      }

      let matchesMana = true;
      switch(manaRange) {
        case 'free': matchesMana = spell.mana === 0; break;
        case 'low': matchesMana = spell.mana > 0 && spell.mana <= 100; break;
        case 'medium': matchesMana = spell.mana > 100 && spell.mana <= 500; break;
        case 'high': matchesMana = spell.mana > 500 && spell.mana <= 1500; break;
        case 'premium': matchesMana = spell.mana > 1500; break;
      }

      return matchesSearch && matchesVocation && matchesLevel && matchesMana;
    });

    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'level':
          return a.level - b.level;
        case 'level-desc':
          return b.level - a.level;
        case 'mana':
          return a.mana - b.mana;
        case 'mana-desc':
          return b.mana - a.mana;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [spells, searchQuery, selectedVocation, levelRange, manaRange, sortBy]);

  const getVocationColor = (vocation) => {
    const colors = {
      'Knight': { bg: '#8B0000', border: '#FF6B6B' },
      'Paladin': { bg: '#FFD700', border: '#FFA500' },
      'Druid': { bg: '#228B22', border: '#90EE90' },
      'Sorcerer': { bg: '#4169E1', border: '#87CEEB' }
    };
    return colors[vocation] || { bg: '#666', border: '#999' };
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Arcane Library</span>
          <h1>Complete Spell Grimoire</h1>
          <p>
            Master every spell in Evolisca. Filter by level, vocation, mana cost, and search by name to find the perfect spells for your character.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>{stats.totalSpells}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Total Spells</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Lvl {stats.avgLevel}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Avg Level</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Lvl {stats.minLevel}-{stats.maxLevel}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Level Range</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>{stats.avgMana}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Avg Mana</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">4 Vocations</span>
            <h2>Class System</h2>
          </div>

          <div style={{ display: 'grid', gap: '10px' }}>
            {['Knight', 'Paladin', 'Druid', 'Sorcerer'].map((voc) => (
              <div key={voc} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', background: 'rgba(100, 150, 255, 0.05)', border: '1px solid rgba(100, 150, 255, 0.2)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: getVocationColor(voc).bg }} />
                <span style={{ color: 'var(--text)', fontWeight: '500', fontSize: '0.85rem' }}>{voc}</span>
                <span style={{ marginLeft: 'auto', color: 'var(--gold)', fontWeight: '600', fontSize: '0.8rem' }}>
                  {spells.filter(s => s.vocations && s.vocations.includes(voc)).length}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* Filters Section */}
      <section className="content-section" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {/* Search */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Search Spells
            </label>
            <input
              type="text"
              placeholder="Search by name or incantation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                fontSize: '0.9rem',
              }}
            />
          </div>

          {/* Level Range Filter */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Level Range
            </label>
            <select
              value={levelRange}
              onChange={(e) => setLevelRange(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner (1-100)</option>
              <option value="early">Early (101-300)</option>
              <option value="mid">Mid (301-700)</option>
              <option value="advanced">Advanced (701-1000)</option>
              <option value="elite">Elite (1001+)</option>
            </select>
          </div>

          {/* Mana Cost Filter */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Mana Cost
            </label>
            <select
              value={manaRange}
              onChange={(e) => setManaRange(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <option value="all">All Costs</option>
              <option value="free">Free (0)</option>
              <option value="low">Low (1-100)</option>
              <option value="medium">Medium (101-500)</option>
              <option value="high">High (501-1500)</option>
              <option value="premium">Premium (1501+)</option>
            </select>
          </div>

          {/* Vocation Filter */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Vocation
            </label>
            <select
              value={selectedVocation}
              onChange={(e) => setSelectedVocation(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <option value="all">All Vocations</option>
              <option value="Knight">Knight</option>
              <option value="Paladin">Paladin</option>
              <option value="Druid">Druid</option>
              <option value="Sorcerer">Sorcerer</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <option value="level">Level (Low to High)</option>
              <option value="level-desc">Level (High to Low)</option>
              <option value="mana">Mana (Low to High)</option>
              <option value="mana-desc">Mana (High to Low)</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Showing {filteredSpells.length} of {spells.length} spells
        </div>
      </section>

      {/* Table Section */}
      {filteredSpells.length > 0 ? (
        <section className="content-section">
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9rem',
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--gold)', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Spell Name
                  </th>
                  <th style={{ padding: '12px', textAlign: 'center', color: 'var(--gold)', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', minWidth: '80px' }}>
                    Level
                  </th>
                  <th style={{ padding: '12px', textAlign: 'center', color: 'var(--gold)', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', minWidth: '90px' }}>
                    Mana Cost
                  </th>
                  <th style={{ padding: '12px', textAlign: 'center', color: 'var(--gold)', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', minWidth: '200px' }}>
                    Vocations
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--gold)', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Incantation
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredSpells.map((spell, idx) => (
                  <tr 
                    key={spell.name}
                    style={{
                      borderBottom: '1px solid rgba(100, 150, 255, 0.1)',
                      background: idx % 2 === 0 ? 'rgba(100, 150, 255, 0.08)' : 'transparent',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(100, 150, 255, 0.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? 'rgba(100, 150, 255, 0.08)' : 'transparent'}
                  >
                    <td style={{ padding: '12px', color: 'var(--text)' }}>
                      <strong>{spell.name}</strong>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(100, 150, 255, 0.2)',
                        border: '1px solid rgba(100, 150, 255, 0.4)',
                        fontWeight: '600',
                        color: '#87ceeb'
                      }}>
                        {spell.level}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: spell.mana === 0 ? 'rgba(100, 200, 100, 0.2)' : 'rgba(255, 150, 100, 0.2)',
                        border: spell.mana === 0 ? '1px solid rgba(100, 200, 100, 0.4)' : '1px solid rgba(255, 150, 100, 0.4)',
                        fontWeight: '600',
                        color: spell.mana === 0 ? '#90ee90' : '#ffb380'
                      }}>
                        {spell.mana === 0 ? 'FREE' : spell.mana}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {spell.vocations.map((vocation) => {
                          const colors = getVocationColor(vocation);
                          return (
                            <span
                              key={vocation}
                              style={{
                                display: 'inline-block',
                                padding: '3px 8px',
                                borderRadius: '4px',
                                background: `${colors.bg}40`,
                                border: `1px solid ${colors.border}`,
                                color: colors.border,
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.4px'
                              }}
                            >
                              {vocation}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>
                      {spell.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <section className="content-section">
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
            <h3>No spells found</h3>
            <p>Try adjusting your filters or search query</p>
          </div>
        </section>
      )}
    </main>
  );
}
