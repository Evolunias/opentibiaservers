import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-chile');
}

export default function ThorniaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-chile" />;
}
