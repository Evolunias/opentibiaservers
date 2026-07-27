import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe');
}

export default function AmeriaPvpeKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe" />;
}
