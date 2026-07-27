import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-chile');
}

export default function AmeriaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-chile" />;
}
