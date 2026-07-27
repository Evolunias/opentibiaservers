import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-sweden');
}

export default function MarolaotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-sweden" />;
}
