import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-chile');
}

export default function MarolaotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-chile" />;
}
