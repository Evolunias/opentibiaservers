import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-pvpe-server');
}

export default function Ameria84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-pvpe-server" />;
}
