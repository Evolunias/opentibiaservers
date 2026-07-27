import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-europe');
}

export default function AmeriaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-europe" />;
}
