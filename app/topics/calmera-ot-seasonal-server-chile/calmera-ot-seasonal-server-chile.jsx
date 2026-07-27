import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-seasonal-server-chile');
}

export default function CalmeraOtSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-seasonal-server-chile" />;
}
