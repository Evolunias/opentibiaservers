import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-pvp-enforced-server');
}

export default function Ameria11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-pvp-enforced-server" />;
}
