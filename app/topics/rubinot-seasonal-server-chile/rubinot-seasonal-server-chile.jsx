import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-chile');
}

export default function RubinotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-chile" />;
}
