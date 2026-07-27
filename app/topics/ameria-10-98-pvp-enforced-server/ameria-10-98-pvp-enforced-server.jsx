import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-98-pvp-enforced-server');
}

export default function Ameria1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-98-pvp-enforced-server" />;
}
