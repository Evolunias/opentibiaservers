import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-chile');
}

export default function MediviaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-chile" />;
}
