import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-uk');
}

export default function AmeriaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-uk" />;
}
