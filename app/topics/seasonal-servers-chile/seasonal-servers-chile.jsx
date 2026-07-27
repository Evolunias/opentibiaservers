import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-chile');
}

export default function SeasonalServersChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-chile" />;
}
