import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-pvp-server');
}

export default function Ameria71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-pvp-server" />;
}
