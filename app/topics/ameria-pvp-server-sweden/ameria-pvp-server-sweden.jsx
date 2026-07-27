import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-sweden');
}

export default function AmeriaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-sweden" />;
}
