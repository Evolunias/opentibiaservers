'use client';

export const dynamic = 'force-dynamic';

import { useState, useMemo } from 'react';
import creaturesData from '@/public/data/creatures.json';
import lootData from '@/public/data/creature-loot.json';
import { getItemDescription } from '@/app/lib/item-lookup';
import { getSpriteUrl } from '@/app/lib/sprite-utils';
import { getItemSpriteUrl } from '@/app/lib/image-utils';
import { getCreatureSpriteUrl, getCreaturePlaceholder } from '@/app/lib/creature-utils';

const labelStyles = `
  @keyframes healthGlow {
    0%, 100% {
      box-shadow: 0 0 8px rgba(255, 100, 100, 0.4), inset 0 0 8px rgba(255, 100, 100, 0.2);
    }
    50% {
      box-shadow: 0 0 16px rgba(255, 100, 100, 0.8), inset 0 0 12px rgba(255, 100, 100, 0.3);
    }
  }

  @keyframes expGlow {
    0%, 100% {
      box-shadow: 0 0 8px rgba(255, 215, 100, 0.4), inset 0 0 8px rgba(255, 215, 100, 0.2);
    }
    50% {
      box-shadow: 0 0 16px rgba(255, 215, 100, 0.8), inset 0 0 12px rgba(255, 215, 100, 0.3);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  .health-label {
    animation: healthGlow 2s ease-in-out infinite;
    background: linear-gradient(135deg, rgba(255, 100, 100, 0.15) 0%, rgba(255, 50, 50, 0.1) 100%);
    border: 1px solid rgba(255, 100, 100, 0.4);
  }

  .exp-label {
    animation: expGlow 2s ease-in-out infinite;
    background: linear-gradient(135deg, rgba(255, 215, 100, 0.15) 0%, rgba(255, 180, 50, 0.1) 100%);
    border: 1px solid rgba(255, 215, 100, 0.4);
  }

  .health-value {
    animation: pulse 1.5s ease-in-out infinite;
  }

  .exp-value {
    animation: pulse 1.8s ease-in-out infinite;
  }

  .loot-item {
    position: relative;
    display: inline-block;
    cursor: help;
  }

  .loot-tooltip {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(10, 15, 15, 0.95);
    border: 1px solid rgba(100, 150, 150, 0.6);
    color: var(--text);
    padding: 12px;
    border-radius: 8px;
    font-size: 0.8rem;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }

  .loot-item:hover .loot-tooltip {
    opacity: 1;
    visibility: visible;
  }

  .loot-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(10, 15, 15, 0.95);
  }
`;

const styleSheet = typeof document !== 'undefined' ? (() => {
  const style = document.createElement('style');
  style.textContent = labelStyles;
  document.head.appendChild(style);
  return style;
})() : null;

export default function CreaturesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Get all creatures from JSON
  const creatures = creaturesData.creatures || [];

  // Calculate stats
  const stats = useMemo(() => {
    const totalCreatures = creatures.length;
    const rarities = {};
    const categories = {};
    creatures.forEach(c => {
      rarities[c.rarity] = (rarities[c.rarity] || 0) + 1;
      categories[c.category] = (categories[c.category] || 0) + 1;
    });
    return { totalCreatures, rarities, categories };
  }, [creatures]);

  const rarityOrder = {
    Boss: 0,
    Rare: 1,
    Uncommon: 2,
    Common: 3,
  };

  // Filter and sort creatures
  const filteredCreatures = useMemo(() => {
    const filtered = creatures.filter(creature => {
      const matchesSearch = creature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (creature.description && creature.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesRarity = selectedRarity === 'all' || creature.rarity === selectedRarity;
      const matchesCategory = selectedCategory === 'all' || creature.category === selectedCategory;
      return matchesSearch && matchesRarity && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'experience-high':
          return b.experience - a.experience;
        case 'experience-low':
          return a.experience - b.experience;
        case 'rarity': {
          const rarityDiff = (rarityOrder[a.rarity] ?? 99) - (rarityOrder[b.rarity] ?? 99);
          return rarityDiff !== 0 ? rarityDiff : a.name.localeCompare(b.name);
        }
        default:
          return 0;
      }
    });
  }, [creatures, searchQuery, selectedRarity, selectedCategory, sortBy]);

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'Common': return { bg: 'rgba(100, 150, 150, 0.1)', border: '#649696', text: '#8fcdcd' };
      case 'Uncommon': return { bg: 'rgba(100, 200, 100, 0.1)', border: '#64c864', text: '#90ee90' };
      case 'Rare': return { bg: 'rgba(100, 150, 255, 0.1)', border: '#6496ff', text: '#87ceeb' };
      case 'Boss': return { bg: 'rgba(255, 100, 100, 0.1)', border: '#ff6464', text: '#ff9999' };
      default: return { bg: 'rgba(200, 200, 200, 0.1)', border: '#c8c8c8', text: '#e0e0e0' };
    }
  };

  const formatExp = (exp) => {
    if (exp >= 1000000) return (exp / 1000000).toFixed(1) + 'M';
    if (exp >= 1000) return (exp / 1000).toFixed(1) + 'K';
    return exp.toString();
  };

  const uniqueRarities = ['all', ...Array.from(new Set(creatures.map(c => c.rarity))).sort((a, b) => {
    const aOrder = rarityOrder[a] ?? 99;
    const bOrder = rarityOrder[b] ?? 99;
    return aOrder === bOrder ? a.localeCompare(b) : aOrder - bOrder;
  })];

  const uniqueCategories = ['all', ...Array.from(new Set(creatures.map(c => c.category))).sort()].filter(c => c);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Creatures & Bestiary</span>
          <h1>Complete Monster Database</h1>
          <p>
            Discover all creatures across Evolisca. Find experience rewards, rarity information, and detailed descriptions to plan your hunts.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>{stats.totalCreatures}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Total Creatures</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Distribution</span>
            <h2>By Rarity</h2>
          </div>

          <div style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
            {Object.entries(stats.rarities).sort((a, b) => b[1] - a[1]).map(([rarity, count]) => {
              const colors = getRarityColor(rarity);
              return (
                <div key={rarity} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', background: colors.bg, border: `1px solid ${colors.border}` }}>
                  <span style={{ color: colors.text, fontWeight: '500' }}>{rarity}</span>
                  <strong style={{ color: colors.text }}>{count}</strong>
                </div>
              );
            })}
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '10px' }}>By Category</span>
            <div style={{ display: 'grid', gap: '8px', maxHeight: '400px', overflowY: 'auto' }}>
              {Object.entries(stats.categories).sort((a, b) => b[1] - a[1]).map(([category, count]) => (
                <div key={category} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', borderRadius: '6px', background: 'rgba(100, 150, 150, 0.1)', border: '1px solid rgba(100, 150, 150, 0.4)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text)' }}>{category}</span>
                  <strong style={{ color: 'var(--gold)' }}>{count}</strong>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Controls Section */}
      <section className="content-section" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {/* Search */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Search Creatures
            </label>
            <input
              type="text"
              placeholder="Search by name or description..."
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

          {/* Rarity Filter */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Rarity
            </label>
            <select
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
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
              {uniqueRarities.map(rarity => (
                <option key={rarity} value={rarity}>
                  {rarity === 'all' ? 'All Rarities' : rarity}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
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
              {uniqueCategories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
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
              <option value="name">Name (A-Z)</option>
              <option value="experience-high">Experience (High to Low)</option>
              <option value="experience-low">Experience (Low to High)</option>
              <option value="rarity">Rarity</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              View
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: viewMode === 'grid' ? '1px solid var(--gold)' : '1px solid var(--line)',
                  background: viewMode === 'grid' ? 'rgba(251, 191, 36, 0.1)' : 'var(--bg-elevated)',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                }}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: viewMode === 'list' ? '1px solid var(--gold)' : '1px solid var(--line)',
                  background: viewMode === 'list' ? 'rgba(251, 191, 36, 0.1)' : 'var(--bg-elevated)',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                }}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Showing {filteredCreatures.length} of {creatures.length} creatures
        </div>
      </section>

      {/* Creatures Display */}
      {filteredCreatures.length > 0 ? (
        <section className="content-section">
          {viewMode === 'grid' ? (
            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {filteredCreatures.map((creature) => {
                const colors = getRarityColor(creature.rarity);
                return (
                  <article
                    key={`${creature.name}-${creature.rarity}`}
                    className="panel"
                    style={{
                      padding: '18px',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      border: `1px solid ${colors.border}40`,
                      background: `linear-gradient(135deg, rgba(28, 35, 33, 0.9) 0%, rgba(28, 35, 33, 0.7) 100%), ${colors.bg}`,
                    }}
                  >
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      {creature.imageId && (
                        <div style={{ flexShrink: 0 }}>
                          <img
                            src={getCreatureSpriteUrl(creature.imageId)}
                            alt={creature.name}
                            style={{
                              width: '64px',
                              height: '64px',
                              imageRendering: 'pixelated',
                              borderRadius: '8px',
                              border: `2px solid ${colors.border}60`,
                              backgroundColor: 'rgba(0,0,0,0.3)',
                              display: 'block',
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      <div style={{ flex: 1 }}>
                        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--text)' }}>
                          {creature.name}
                        </h3>
                        <span
                          style={{
                            backgroundColor: colors.bg,
                            border: `1px solid ${colors.border}`,
                            color: colors.text,
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            display: 'inline-block'
                          }}
                        >
                          {creature.rarity}
                        </span>
                      </div>
                    </div>

                    {creature.description && (
                      <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                        {creature.description}
                      </p>
                    )}

                    <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                      <div style={{ display: 'grid', gap: '10px' }}>
                        <div className="health-label" style={{ padding: '10px', borderRadius: '8px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <span style={{ color: '#ff6b6b', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>❤ Health</span>
                            <strong className="health-value" style={{ color: '#ff9999', fontSize: '1.1rem', fontWeight: '800' }}>
                              {formatExp(creature.health)}
                            </strong>
                          </div>
                          <div style={{ fontSize: '0.7rem', color: '#ff7777', fontWeight: '600' }}>
                            {creature.health.toLocaleString()} hp
                          </div>
                        </div>
                        <div className="exp-label" style={{ padding: '10px', borderRadius: '8px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <span style={{ color: '#ffd700', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>✨ Experience</span>
                            <strong className="exp-value" style={{ color: '#ffed4e', fontSize: '1.1rem', fontWeight: '800' }}>
                              {formatExp(creature.experience)}
                            </strong>
                          </div>
                          <div style={{ fontSize: '0.7rem', color: '#ffc700', fontWeight: '600' }}>
                            {creature.experience.toLocaleString()} exp
                          </div>
                        </div>
                      </div>

                      {lootData[creature.name] && lootData[creature.name].length > 0 && (
                        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                            🎁 Loot Drops ({lootData[creature.name].length})
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'flex-start' }}>
                            {lootData[creature.name].slice(0, 20).map((item) => {
                              const itemInfo = getItemDescription(item.name);
                              const tierColor = itemInfo.tier === 'Legendary' ? '#fbbf24' : itemInfo.tier === 'Rare' ? '#87a07d' : itemInfo.tier === 'Uncommon' ? '#6366f1' : '#888';
                              return (
                                <div
                                  key={item.name}
                                  className="loot-item"
                                  style={{
                                    position: 'relative',
                                    cursor: 'help',
                                    display: 'inline-block',
                                    padding: '6px 10px',
                                    borderRadius: '4px',
                                    background: 'rgba(100, 150, 150, 0.1)',
                                    border: `1px solid ${tierColor}60`,
                                    fontSize: '0.75rem',
                                    color: tierColor,
                                    fontWeight: '500',
                                  }}
                                >
                                  {item.name}
                                  <div className="loot-tooltip" style={{ whiteSpace: 'normal', maxWidth: '240px', textAlign: 'left', color: 'var(--text)' }}>
                                    <div style={{ fontWeight: '600', color: tierColor, marginBottom: '4px', fontSize: '0.85rem' }}>{item.name}</div>
                                    {itemInfo.description && itemInfo.description !== 'Item information not available' && (
                                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', lineHeight: '1.3' }}>
                                        {itemInfo.description}
                                      </div>
                                    )}
                                    {itemInfo.tier && (
                                      <div style={{ fontSize: '0.7rem', color: tierColor, marginBottom: '4px' }}>
                                        {itemInfo.tier}
                                      </div>
                                    )}
                                    {(item.chance !== undefined || item.maxCount !== undefined) && (
                                      <div style={{ fontSize: '0.7rem', color: '#aaa', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid rgba(200,200,200,0.2)' }}>
                                        {item.chance !== undefined && (
                                          <div>Drop Chance: {item.chance}%</div>
                                        )}
                                        {item.maxCount !== undefined && (
                                          <div>Max Count: {item.maxCount}</div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                            {lootData[creature.name].length > 20 && (
                              <div
                                style={{
                                  padding: '6px 10px',
                                  borderRadius: '4px',
                                  background: 'rgba(100, 150, 150, 0.1)',
                                  border: '1px solid rgba(100, 150, 150, 0.4)',
                                  fontSize: '0.75rem',
                                  color: 'var(--text-muted)',
                                  fontWeight: '600',
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                +{lootData[creature.name].length - 20} more items
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {filteredCreatures.map((creature) => {
                const colors = getRarityColor(creature.rarity);
                return (
                  <div
                    key={`${creature.name}-${creature.rarity}`}
                    className="panel"
                    style={{
                      padding: '14px 18px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                      border: `1px solid ${colors.border}40`,
                      background: `linear-gradient(90deg, rgba(28, 35, 33, 0.9) 0%, rgba(28, 35, 33, 0.7) 100%), ${colors.bg}`,
                    }}
                  >
                    {creature.imageId && (
                      <div style={{ flexShrink: 0 }}>
                        <img
                          src={getCreatureSpriteUrl(creature.imageId)}
                          alt={creature.name}
                          style={{
                            width: '48px',
                            height: '48px',
                            imageRendering: 'pixelated',
                            borderRadius: '6px',
                            border: `1px solid ${colors.border}60`,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            display: 'block',
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div style={{ flex: 1 }}>
                      <strong style={{ color: 'var(--text)' }}>{creature.name}</strong>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '4px', fontSize: '0.85rem' }}>
                        <span 
                          style={{ 
                            backgroundColor: colors.bg,
                            border: `1px solid ${colors.border}`,
                            color: colors.text,
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                          }}
                        >
                          {creature.rarity}
                        </span>
                        {creature.description && (
                          <span style={{ color: 'var(--text-muted)' }}>{creature.description}</span>
                        )}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginLeft: '16px', alignItems: 'center' }}>
                      <div className="health-label" style={{ textAlign: 'right', padding: '8px 12px', borderRadius: '8px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#ff6b6b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>❤ HP</div>
                        <strong className="health-value" style={{ color: '#ff9999', fontSize: '1rem', display: 'block', fontWeight: '800' }}>
                          {formatExp(creature.health)}
                        </strong>
                      </div>
                      <div className="exp-label" style={{ textAlign: 'right', padding: '8px 12px', borderRadius: '8px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#ffd700', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>✨ EXP</div>
                        <strong className="exp-value" style={{ color: '#ffed4e', fontSize: '1rem', display: 'block', fontWeight: '800' }}>
                          {formatExp(creature.experience)}
                        </strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      ) : (
        <section className="content-section">
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
            <h3>No creatures found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        </section>
      )}
    </main>
  );
}
