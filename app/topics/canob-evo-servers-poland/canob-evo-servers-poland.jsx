import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-servers-poland');
}

export default function CanobEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-servers-poland" />;
}
