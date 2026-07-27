import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-chile');
}

export default function OlderaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-chile" />;
}
