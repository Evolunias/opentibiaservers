import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-mexico');
}

export default function MarolaotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-mexico" />;
}
