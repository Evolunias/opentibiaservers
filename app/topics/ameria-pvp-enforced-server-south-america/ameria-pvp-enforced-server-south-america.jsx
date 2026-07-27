import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-south-america');
}

export default function AmeriaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-south-america" />;
}
