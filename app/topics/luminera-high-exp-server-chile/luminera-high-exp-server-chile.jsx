import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-chile');
}

export default function LumineraHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-chile" />;
}
