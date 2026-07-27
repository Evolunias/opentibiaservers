import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-pvp-enforced-server');
}

export default function Ameria74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-pvp-enforced-server" />;
}
