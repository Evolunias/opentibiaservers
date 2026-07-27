import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-chile');
}

export default function AlasteraSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-chile" />;
}
