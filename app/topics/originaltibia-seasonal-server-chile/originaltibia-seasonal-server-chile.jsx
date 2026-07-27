import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-chile');
}

export default function OriginaltibiaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-chile" />;
}
