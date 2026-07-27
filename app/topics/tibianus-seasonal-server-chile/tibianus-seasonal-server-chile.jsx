import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-chile');
}

export default function TibianusSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-chile" />;
}
