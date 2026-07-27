import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-pvp-enforced-server');
}

export default function Ameria80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-pvp-enforced-server" />;
}
