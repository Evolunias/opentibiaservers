import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-chile');
}

export default function RubinotRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-chile" />;
}
