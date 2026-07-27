import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-sweden');
}

export default function MarolaotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-sweden" />;
}
