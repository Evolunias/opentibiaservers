import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-chile');
}

export default function ThaisotHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-chile" />;
}
