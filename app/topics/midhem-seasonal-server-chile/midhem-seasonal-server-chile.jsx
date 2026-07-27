import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-chile');
}

export default function MidhemSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-chile" />;
}
