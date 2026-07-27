import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-chile');
}

export default function MiracleSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-chile" />;
}
