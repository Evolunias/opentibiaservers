import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-chile');
}

export default function NoxiousotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-chile" />;
}
