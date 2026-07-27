import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-evo-server-latin-america');
}

export default function VenoreotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-evo-server-latin-america" />;
}
