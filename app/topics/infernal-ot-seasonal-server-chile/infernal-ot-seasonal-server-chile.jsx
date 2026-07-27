import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-chile');
}

export default function InfernalOtSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-chile" />;
}
