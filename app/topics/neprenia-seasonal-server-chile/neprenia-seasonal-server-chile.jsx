import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-chile');
}

export default function NepreniaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-chile" />;
}
