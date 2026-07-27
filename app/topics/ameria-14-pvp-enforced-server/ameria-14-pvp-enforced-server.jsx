import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-pvp-enforced-server');
}

export default function Ameria14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-pvp-enforced-server" />;
}
