import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-pvp-enforced-server');
}

export default function Ameria772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-pvp-enforced-server" />;
}
