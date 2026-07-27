import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-poland');
}

export default function AmeriaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-poland" />;
}
