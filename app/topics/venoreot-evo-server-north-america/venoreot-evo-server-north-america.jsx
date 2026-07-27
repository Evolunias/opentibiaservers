import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-north-america');
}

export default function VenoreotEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-north-america" />;
}
