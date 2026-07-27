import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-pvpe-server');
}

export default function Ameria12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-pvpe-server" />;
}
