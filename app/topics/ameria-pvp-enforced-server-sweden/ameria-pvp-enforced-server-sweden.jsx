import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-sweden');
}

export default function AmeriaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-sweden" />;
}
