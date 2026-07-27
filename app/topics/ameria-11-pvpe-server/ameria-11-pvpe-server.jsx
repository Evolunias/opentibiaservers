import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-pvpe-server');
}

export default function Ameria11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-pvpe-server" />;
}
