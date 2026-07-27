import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-chile');
}

export default function CanobSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-chile" />;
}
