import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-chile');
}

export default function AmeriaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-chile" />;
}
