import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-sweden');
}

export default function MarolaotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-sweden" />;
}
