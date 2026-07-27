import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-chile');
}

export default function MadnessaliveSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-chile" />;
}
