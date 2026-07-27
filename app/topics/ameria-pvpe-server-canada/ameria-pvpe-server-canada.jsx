import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-canada');
}

export default function AmeriaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-canada" />;
}
