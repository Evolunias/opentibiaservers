import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-europe');
}

export default function VenoreotEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-europe" />;
}
