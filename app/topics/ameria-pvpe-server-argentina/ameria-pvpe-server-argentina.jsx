import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-argentina');
}

export default function AmeriaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-argentina" />;
}
