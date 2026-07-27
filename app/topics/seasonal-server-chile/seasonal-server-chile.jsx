import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-chile');
}

export default function SeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-chile" />;
}
