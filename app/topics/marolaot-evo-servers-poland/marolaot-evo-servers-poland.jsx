import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-servers-poland');
}

export default function MarolaotEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-servers-poland" />;
}
