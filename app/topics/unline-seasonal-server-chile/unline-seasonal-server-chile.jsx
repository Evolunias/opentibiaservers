import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-chile');
}

export default function UnlineSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-chile" />;
}
