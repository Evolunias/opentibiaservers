import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-chile');
}

export default function ImperianicSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-chile" />;
}
