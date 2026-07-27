import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-chile');
}

export default function RealeraSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-chile" />;
}
