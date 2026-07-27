import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-uk');
}

export default function MarolaotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-uk" />;
}
