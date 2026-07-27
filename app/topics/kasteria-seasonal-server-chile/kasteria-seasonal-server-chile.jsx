import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-chile');
}

export default function KasteriaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-chile" />;
}
