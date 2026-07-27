import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-pvp-enforced-server');
}

export default function Ameria13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-pvp-enforced-server" />;
}
