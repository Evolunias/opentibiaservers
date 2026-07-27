import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-pvp-enforced-server');
}

export default function Ameria15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-pvp-enforced-server" />;
}
