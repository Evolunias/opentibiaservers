import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-pvpe-server');
}

export default function Ameria772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-pvpe-server" />;
}
