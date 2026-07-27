import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-chile');
}

export default function TibiameHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-chile" />;
}
