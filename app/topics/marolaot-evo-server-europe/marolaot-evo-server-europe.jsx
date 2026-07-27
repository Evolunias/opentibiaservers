import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-europe');
}

export default function MarolaotEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-europe" />;
}
