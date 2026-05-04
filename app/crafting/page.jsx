'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';
import './crafting.css';

export default function CraftingPage() {
  const { t } = useLanguage();
  const craftingCategories = [
    {
      name: t('page.crafting.equipment-sets'),
      description: t('page.crafting.equipment-sets-desc'),
      examples: [t('page.crafting.bloodforge-set'), t('page.crafting.celestial-set'), t('page.crafting.shadow-set')]
    },
    {
      name: t('page.crafting.runes-potions'),
      description: t('page.crafting.runes-potions-desc'),
      examples: [t('page.crafting.fire-rune'), t('page.crafting.ice-rune'), t('page.crafting.healing-potion')]
    },
    {
      name: t('page.crafting.ammunition'),
      description: t('page.crafting.ammunition-desc'),
      examples: [t('page.crafting.divine-bolts'), t('page.crafting.flaming-arrows'), t('page.crafting.explosive-arrows')]
    },
    {
      name: t('page.crafting.enchantment'),
      description: t('page.crafting.enchantment-desc'),
      examples: [t('page.crafting.enchanted-dust'), t('page.crafting.mystic-crystals'), t('page.crafting.essence-of-magic')]
    }
  ];

  const craftingTiers = [
    {
      tier: t('page.crafting.common'),
      description: t('page.crafting.common-desc'),
      materials: [t('page.crafting.basic-materials'), t('page.crafting.common-ingredients'), t('page.crafting.simple-tools')]
    },
    {
      tier: t('page.crafting.uncommon'),
      description: t('page.crafting.uncommon-desc'),
      materials: [t('page.crafting.refined-materials'), t('page.crafting.rare-ingredients'), t('page.crafting.specialized-tools')]
    },
    {
      tier: t('page.crafting.rare'),
      description: t('page.crafting.rare-desc'),
      materials: [t('page.crafting.exotic-materials'), t('page.crafting.legendary-ingredients'), t('page.crafting.masterwork-tools')]
    },
    {
      tier: t('page.crafting.legendary'),
      description: t('page.crafting.legendary-desc'),
      materials: [t('page.crafting.mythical-materials'), t('page.crafting.ancient-artifacts'), t('page.crafting.divine-tools')]
    }
  ];

  const setCombinations = [
    {
      name: t('page.crafting.bloodforge-set'),
      tier: t('page.crafting.legendary'),
      pieces: 9,
      bonus: t('page.crafting.bloodforge-bonus')
    },
    {
      name: t('page.crafting.celestial-set'),
      tier: t('page.crafting.rare'),
      pieces: 5,
      bonus: t('page.crafting.celestial-bonus')
    },
    {
      name: t('page.crafting.shadow-set'),
      tier: t('page.crafting.rare'),
      pieces: 4,
      bonus: t('page.crafting.shadow-bonus')
    }
  ];

  const craftingProcess = [
    {
      step: 1,
      name: t('page.crafting.step-1'),
      description: t('page.crafting.step-1-desc')
    },
    {
      step: 2,
      name: t('page.crafting.step-2'),
      description: t('page.crafting.step-2-desc')
    },
    {
      step: 3,
      name: t('page.crafting.step-3'),
      description: t('page.crafting.step-3-desc')
    },
    {
      step: 4,
      name: t('page.crafting.step-4'),
      description: t('page.crafting.step-4-desc')
    }
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="page-header">
        <h1>{t('page.crafting.title')}</h1>
        <p>{t('page.crafting.subtitle')}</p>
      </section>

      <section className="hero-image-section">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ffea481d3a1ff493d9ae4ebbd10e6b293%2F7f195d91a3bc4aa781919238b92611a1?format=webp&width=2360&height=800"
          alt="Crafting System Hero"
          className="hero-image"
        />
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{t('page.crafting.categories-title')}</h2>
          <p>{t('page.crafting.categories-description')}</p>
        </div>

        <div className="crafting-grid">
          {craftingCategories.map((category) => (
            <div key={category.name} className="panel crafting-card">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <ul className="example-list">
                {category.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{t('page.crafting.tiers-title')}</h2>
          <p>{t('page.crafting.tiers-description')}</p>
        </div>

        <div className="tier-grid">
          {craftingTiers.map((tier) => (
            <div key={tier.tier} className="panel tier-card">
              <div className="tier-header">
                <h3>{tier.tier}</h3>
              </div>
              <p>{tier.description}</p>
              <div className="materials-section">
                <strong>{t('page.crafting.required-materials')}:</strong>
                <ul>
                  {tier.materials.map((material) => (
                    <li key={material}>{material}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{t('page.crafting.sets-title')}</h2>
          <p>{t('page.crafting.sets-description')}</p>
        </div>

        <div className="set-grid">
          {setCombinations.map((set) => (
            <div key={set.name} className="panel set-card">
              <div className="set-header">
                <h3>{set.name}</h3>
                <span className="tier-badge">{set.tier}</span>
              </div>
              <div className="set-info">
                <p><strong>{t('page.crafting.pieces')}:</strong> {set.pieces}</p>
                <p><strong>{t('page.crafting.set-bonus')}:</strong> {set.bonus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{t('page.crafting.process-title')}</h2>
          <p>{t('page.crafting.process-description')}</p>
        </div>

        <div className="process-steps">
          {craftingProcess.map((step) => (
            <div key={step.step} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h3>{step.name}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="panel info-panel">
          <h2>{t('page.crafting.tips-title')}</h2>
          <ul className="tips-list">
            <li>{t('page.crafting.tip-1')}</li>
            <li>{t('page.crafting.tip-2')}</li>
            <li>{t('page.crafting.tip-3')}</li>
            <li>{t('page.crafting.tip-4')}</li>
            <li>{t('page.crafting.tip-5')}</li>
            <li>{t('page.crafting.tip-6')}</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <div className="panel">
          <h2>{t('page.crafting.related-title')}</h2>
          <nav className="related-links">
            <Link href="/items">{t('page.crafting.related-items')}</Link>
            <Link href="/upgrade-system">{t('page.crafting.related-upgrade')}</Link>
            <Link href="/equipment-set-bonuses">{t('page.crafting.related-bonuses')}</Link>
            <Link href="/currencies">{t('page.crafting.related-currencies')}</Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
