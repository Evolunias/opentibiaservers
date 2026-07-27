import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-chile');
}

export default function SeasonalLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-chile" />;
}
