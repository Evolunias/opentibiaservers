import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-chile');
}

export default function SeasonalClientChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-chile" />;
}
