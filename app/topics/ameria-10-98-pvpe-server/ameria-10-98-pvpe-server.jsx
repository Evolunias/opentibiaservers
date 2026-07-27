import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-98-pvpe-server');
}

export default function Ameria1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-98-pvpe-server" />;
}
