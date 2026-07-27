import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-chile');
}

export default function ElderaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-chile" />;
}
