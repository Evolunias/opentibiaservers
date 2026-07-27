import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-pvpe-server');
}

export default function Ameria14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-pvpe-server" />;
}
