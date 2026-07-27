import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-chile');
}

export default function OtmadnessSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-chile" />;
}
