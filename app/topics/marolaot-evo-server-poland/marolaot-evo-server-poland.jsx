import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-poland');
}

export default function MarolaotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-poland" />;
}
