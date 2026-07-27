import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-pvpe-server');
}

export default function Ameria13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-pvpe-server" />;
}
