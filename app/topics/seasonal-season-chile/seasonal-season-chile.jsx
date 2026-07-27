import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-chile');
}

export default function SeasonalSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-chile" />;
}
