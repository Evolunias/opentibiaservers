import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-chile');
}

export default function ClassicusSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-chile" />;
}
