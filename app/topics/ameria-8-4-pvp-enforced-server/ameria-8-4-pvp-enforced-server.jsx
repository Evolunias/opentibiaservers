import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-pvp-enforced-server');
}

export default function Ameria84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-pvp-enforced-server" />;
}
