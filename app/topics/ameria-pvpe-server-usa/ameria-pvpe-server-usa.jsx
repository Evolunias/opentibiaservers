import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-usa');
}

export default function AmeriaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-usa" />;
}
