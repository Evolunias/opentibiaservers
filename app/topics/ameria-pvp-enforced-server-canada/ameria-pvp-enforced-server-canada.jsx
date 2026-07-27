import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-canada');
}

export default function AmeriaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-canada" />;
}
