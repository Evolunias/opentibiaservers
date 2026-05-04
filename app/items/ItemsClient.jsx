'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ItemsClient({ itemData }) {
  const searchParams = useSearchParams();
  const [selectedSlot, setSelectedSlot] = useState('all');

  useEffect(() => {
    const slot = searchParams.get('slot');
    if (slot) {
      setSelectedSlot(slot);
    }
  }, [searchParams]);

  const slots = Object.entries(itemData.equipment_slots);
  const weapons = Object.entries(itemData.weapons);

  let displaySlots = [];
  let displayWeapons = [];

  if (selectedSlot === 'all') {
    displaySlots = slots;
  } else if (selectedSlot === 'melee' || selectedSlot === 'distance' || selectedSlot === 'mage') {
    displayWeapons = weapons.filter(([key]) => key === selectedSlot);
  } else {
    displaySlots = slots.filter(([key]) => key === selectedSlot);
  }

  const getTierColor = (tier) => {
    switch(tier) {
      case 'Legendary': return '#fbbf24';
      case 'Rare': return '#87a07d';
      case 'Uncommon': return '#6366f1';
      default: return 'var(--text-muted)';
    }
  };

  const renderItemCard = (item, isWeapon = false, index = 0) => {
    // Create unique key combining name, ID, and index to handle duplicate names
    const uniqueKey = `${item.name}-${item.id || ''}-${index}`;

    return (
    <article
      key={uniqueKey}
      className="panel"
      style={{
        padding: '20px',
        borderRadius: '16px',
        display: 'grid',
        gap: '12px',
      }}
    >
      <div style={{ display: 'grid', gap: '12px' }}>
        <div>
          <strong style={{ display: 'block', fontSize: '1.05rem' }}>{item.name}</strong>
        </div>
        <span
          className="chip"
          style={{
            width: 'fit-content',
            backgroundColor: getTierColor(item.tier) + '20',
            borderColor: getTierColor(item.tier) + '40',
            color: getTierColor(item.tier),
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: '600',
            border: '1px solid',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {item.tier}
        </span>
      </div>

      <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
        {item.vocation && (
          <span style={{ fontSize: '0.85rem', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>
            {item.vocation}
          </span>
        )}
        {item.level_requirement && (
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
            Level {item.level_requirement}+
          </span>
        )}
        {item.weight && (
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
            Weight: {item.weight}
          </span>
        )}
        {item.attack && (
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Attack</span>
            <strong style={{ color: 'var(--gold)' }}>{item.attack}</strong>
          </div>
        )}
        {item.defense && (
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Defense</span>
            <strong style={{ color: 'var(--gold)' }}>{item.defense}</strong>
          </div>
        )}
        <div style={{ display: 'grid', gap: '4px' }}>
          {Object.entries(item.stats || {}).map(([stat, value]) => (
            <div key={stat} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>
                {stat.replace(/_/g, ' ').charAt(0).toUpperCase() + stat.slice(1).replace(/_/g, ' ')}
              </span>
              <strong style={{ color: 'var(--gold)' }}>+{value}%{typeof value === 'number' && value < 1 ? '' : ''}</strong>
            </div>
          ))}
        </div>
      </div>
    </article>
    );
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Equipment</span>
          <h1>Complete item reference</h1>
          <p>
            Browse all equipment organized by slot. Find stats, tier information, and level requirements for helmets, armor, shields, boots, weapons, and more. All items sourced from Evolisca.
          </p>

          <div style={{ marginTop: '24px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
              Equipment Slot
            </label>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              style={{
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                width: '100%',
                cursor: 'pointer',
                fontSize: '0.95rem',
              }}
            >
              <option value="all">All equipment & weapons</option>
              <optgroup label="Weapons">
                {weapons.map(([key, weapon]) => (
                  <option key={key} value={key}>{weapon.label}</option>
                ))}
              </optgroup>
              <optgroup label="Equipment">
                {slots.map(([key, slot]) => (
                  <option key={key} value={key}>{slot.label}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">About Equipment</span>
            <h2>Complete Database</h2>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', lineHeight: '1.6' }}>
                Complete equipment database for Evolisca with all items, stats, and level requirements. Browse by slot to find items for your playstyle.
              </span>
            </div>
            <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
              <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '4px' }}>Item Tiers</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Legendary (End-game), Rare (Advanced), Uncommon (Mid-level)
              </span>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-section">
        {displayWeapons.length > 0 ? (
          displayWeapons.map(([weaponType, weaponData]) => (
            <div key={weaponType} style={{ marginBottom: '40px' }}>
              <div className="section-heading compact">
                <div>
                  <h3 style={{ margin: '0' }}>{weaponData.label}</h3>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                {weaponData.items.map((item, index) => renderItemCard(item, true, index))}
              </div>
            </div>
          ))
        ) : (
          displaySlots.map(([slotKey, slot]) => (
            <div key={slotKey} style={{ marginBottom: '40px' }}>
              <div className="section-heading compact">
                <div>
                  <span className="eyebrow">{slot.label}</span>
                  <h2>{slot.label}</h2>
                  <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
                    {slot.description}
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                {slot.items.map((item, index) => renderItemCard(item, false, index))}
              </div>
            </div>
          ))
        )}
      </section>

      {selectedSlot === 'all' && displayWeapons.length === 0 && (
        <section className="content-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Weapons</span>
              <h2>Melee, Distance & Mage Weapons</h2>
            </div>
            <p>
              Weapons are vital for combat, allowing players to deal damage. Each type offers unique benefits and progression paths.
            </p>
          </div>

          {Object.entries(itemData.weapons).map(([weaponType, weaponData]) => (
            <div key={weaponType} style={{ marginBottom: '40px' }}>
              <div className="section-heading compact">
                <div>
                  <h3 style={{ margin: '0' }}>{weaponData.label}</h3>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                {weaponData.items.map((item, index) => renderItemCard(item, true, index))}
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
