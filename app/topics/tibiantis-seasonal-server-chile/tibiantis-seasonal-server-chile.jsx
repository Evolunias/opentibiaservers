import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-chile');
}

export default function TibiantisSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-chile" />;
}
