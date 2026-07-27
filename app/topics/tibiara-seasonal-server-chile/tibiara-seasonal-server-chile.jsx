import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-chile');
}

export default function TibiaraSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-chile" />;
}
