import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-chile');
}

export default function HighExpGuideChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-chile" />;
}
