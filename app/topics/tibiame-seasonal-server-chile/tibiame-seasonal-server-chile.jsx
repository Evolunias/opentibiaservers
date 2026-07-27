import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-chile');
}

export default function TibiameSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-chile" />;
}
