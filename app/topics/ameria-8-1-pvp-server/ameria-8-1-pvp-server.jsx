import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-pvp-server');
}

export default function Ameria81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-pvp-server" />;
}
