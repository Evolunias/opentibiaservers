import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-north-america');
}

export default function MarolaotEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-north-america" />;
}
