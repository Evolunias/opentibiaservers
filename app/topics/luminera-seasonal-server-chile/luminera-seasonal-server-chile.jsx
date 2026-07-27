import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-chile');
}

export default function LumineraSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-chile" />;
}
