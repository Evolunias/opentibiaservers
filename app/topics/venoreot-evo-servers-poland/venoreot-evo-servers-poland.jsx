import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-servers-poland');
}

export default function VenoreotEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-servers-poland" />;
}
