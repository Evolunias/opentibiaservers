import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-pvp-server');
}

export default function Ameria12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-pvp-server" />;
}
