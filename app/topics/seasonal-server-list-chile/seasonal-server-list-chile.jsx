import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-chile');
}

export default function SeasonalServerListChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-chile" />;
}
