import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-chile');
}

export default function RubinotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-chile" />;
}
