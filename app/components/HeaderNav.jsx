'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';
import { translate } from '@/app/lib/translations';
import {
  Backpack,
  Shield,
  Zap,
  Gem,
  Sword,
  Sparkles,
} from 'lucide-react';

export default function HeaderNav() {
  const { language } = useLanguage();

  const equipmentSlots = [
    { translationKey: 'equipment.melee', icon: Sword, href: '/items?slot=melee' },
    { translationKey: 'equipment.distance', icon: Sword, href: '/items?slot=distance' },
    { translationKey: 'equipment.wands-rods', icon: Zap, href: '/items?slot=mage' },
    { translationKey: 'equipment.backpacks', icon: Backpack, href: '/items?slot=backpack' },
    { translationKey: 'equipment.helmets', icon: Shield, href: '/items?slot=helmet' },
    { translationKey: 'equipment.armors', icon: Zap, href: '/items?slot=armor' },
    { translationKey: 'equipment.legs', icon: Shield, href: '/items?slot=legs' },
    { translationKey: 'equipment.boots', icon: Shield, href: '/items?slot=boots' },
    { translationKey: 'equipment.amulets', icon: Gem, href: '/items?slot=amulet' },
    { translationKey: 'equipment.rings', icon: Gem, href: '/items?slot=ring' },
    { translationKey: 'equipment.ammo-slot', icon: Sword, href: '/items?slot=ammo_slot' },
    { translationKey: 'equipment.charms', icon: Sparkles, href: '/items?slot=charms' },
  ];

  return (
    <div className="equipment-nav" aria-label="Equipment Slots">
      <div className="equipment-nav-inner">
        {equipmentSlots.map((slot) => {
          const Icon = slot.icon;
          return (
            <Link key={slot.translationKey} href={slot.href} className="equipment-nav-item">
              <Icon className="h-4 w-4" />
              <span>{translate(slot.translationKey, language)}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
