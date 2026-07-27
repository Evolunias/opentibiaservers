import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-chile');
}

export default function BlazeraSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-chile" />;
}
