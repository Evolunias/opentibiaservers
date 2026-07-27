import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-pvpe-server');
}

export default function Ameria76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-pvpe-server" />;
}
