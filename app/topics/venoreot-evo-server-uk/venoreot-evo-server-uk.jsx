import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-uk');
}

export default function VenoreotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-uk" />;
}
