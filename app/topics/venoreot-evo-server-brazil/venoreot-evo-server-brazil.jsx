import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-brazil');
}

export default function VenoreotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-brazil" />;
}
