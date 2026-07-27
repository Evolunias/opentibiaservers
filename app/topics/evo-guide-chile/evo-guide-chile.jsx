import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-chile');
}

export default function EvoGuideChileKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-chile" />;
}
