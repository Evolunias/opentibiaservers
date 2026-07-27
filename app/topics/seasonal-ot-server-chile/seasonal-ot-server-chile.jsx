import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-chile');
}

export default function SeasonalOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-chile" />;
}
