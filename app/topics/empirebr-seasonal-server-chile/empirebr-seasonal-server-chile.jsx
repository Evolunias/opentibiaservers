import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-chile');
}

export default function EmpirebrSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-chile" />;
}
