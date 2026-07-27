import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-pvp-enforced-server');
}

export default function Ameria96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-pvp-enforced-server" />;
}
