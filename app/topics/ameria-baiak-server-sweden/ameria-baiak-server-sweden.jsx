import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-sweden');
}

export default function AmeriaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-sweden" />;
}
