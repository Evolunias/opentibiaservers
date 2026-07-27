import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-pvpe-server');
}

export default function Ameria86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-pvpe-server" />;
}
