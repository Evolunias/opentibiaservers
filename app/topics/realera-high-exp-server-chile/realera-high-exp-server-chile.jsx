import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-chile');
}

export default function RealeraHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-chile" />;
}
