import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-pvpe-server');
}

export default function Ameria81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-pvpe-server" />;
}
