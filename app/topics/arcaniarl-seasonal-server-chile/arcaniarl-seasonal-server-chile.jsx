import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-chile');
}

export default function ArcaniarlSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-chile" />;
}
