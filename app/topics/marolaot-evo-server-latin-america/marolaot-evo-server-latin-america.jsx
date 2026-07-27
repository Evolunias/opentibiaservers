import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-latin-america');
}

export default function MarolaotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-latin-america" />;
}
