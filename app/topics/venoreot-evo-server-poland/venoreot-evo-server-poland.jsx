import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-poland');
}

export default function VenoreotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-poland" />;
}
