import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-pvpe-server');
}

export default function Ameria96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-pvpe-server" />;
}
