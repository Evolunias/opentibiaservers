import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-canada');
}

export default function VenoreotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-canada" />;
}
