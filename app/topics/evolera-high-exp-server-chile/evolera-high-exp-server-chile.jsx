import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-chile');
}

export default function EvoleraHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-chile" />;
}
