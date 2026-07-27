import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-pvpe-server');
}

export default function Ameria15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-pvpe-server" />;
}
