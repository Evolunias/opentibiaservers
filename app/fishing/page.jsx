import FishingClient from './FishingClient';

export const metadata = {
  title: 'Fishing Guide',
  description: 'Complete Fishing guide for Evolisca - Learn where to find Alissa, which fishing rods to use, what fish you can catch, and their incredible benefits.',
  keywords: ['Fishing', 'Fish', 'Fishing Rods', 'Alissa', 'Character Progression', 'Buffs'],
};

export default function FishingPage() {
  return <FishingClient />;
}
