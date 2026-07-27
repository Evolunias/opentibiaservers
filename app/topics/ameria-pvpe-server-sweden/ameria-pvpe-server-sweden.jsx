import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-sweden');
}

export default function AmeriaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-sweden" />;
}
