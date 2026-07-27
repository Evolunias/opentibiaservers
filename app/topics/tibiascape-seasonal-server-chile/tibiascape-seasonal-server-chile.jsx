import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-chile');
}

export default function TibiascapeSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-chile" />;
}
