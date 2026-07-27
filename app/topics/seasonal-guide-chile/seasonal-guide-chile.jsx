import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-chile');
}

export default function SeasonalGuideChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-chile" />;
}
