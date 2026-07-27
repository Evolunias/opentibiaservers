import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-servers-brazil');
}

export default function VenoreotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-servers-brazil" />;
}
