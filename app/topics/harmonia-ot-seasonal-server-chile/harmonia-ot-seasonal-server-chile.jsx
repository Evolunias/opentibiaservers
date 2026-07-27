import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-chile');
}

export default function HarmoniaOtSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-chile" />;
}
