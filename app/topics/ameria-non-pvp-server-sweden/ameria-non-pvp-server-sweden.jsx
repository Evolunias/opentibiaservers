import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-sweden');
}

export default function AmeriaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-sweden" />;
}
