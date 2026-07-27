import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-seasonal-server-chile');
}

export default function CoxaotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-seasonal-server-chile" />;
}
