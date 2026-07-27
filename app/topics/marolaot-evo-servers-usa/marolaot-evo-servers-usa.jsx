import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-servers-usa');
}

export default function MarolaotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-servers-usa" />;
}
