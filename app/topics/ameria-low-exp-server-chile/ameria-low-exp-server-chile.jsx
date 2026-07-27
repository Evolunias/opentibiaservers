import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-chile');
}

export default function AmeriaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-chile" />;
}
