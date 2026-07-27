import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-chile');
}

export default function LowExpGuideChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-chile" />;
}
