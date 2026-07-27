import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-pvpe-server');
}

export default function Ameria71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-pvpe-server" />;
}
