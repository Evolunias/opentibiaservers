import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-germany');
}

export default function MarolaotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-germany" />;
}
