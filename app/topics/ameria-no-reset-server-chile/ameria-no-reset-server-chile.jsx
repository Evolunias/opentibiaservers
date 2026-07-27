import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-chile');
}

export default function AmeriaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-chile" />;
}
