import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-chile');
}

export default function TibijkaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-chile" />;
}
