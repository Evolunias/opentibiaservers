import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-germany');
}

export default function AmeriaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-germany" />;
}
