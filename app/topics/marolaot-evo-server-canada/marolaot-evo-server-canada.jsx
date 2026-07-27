import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-canada');
}

export default function MarolaotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-canada" />;
}
