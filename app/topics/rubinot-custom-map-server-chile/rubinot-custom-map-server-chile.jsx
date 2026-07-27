import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-server-chile');
}

export default function RubinotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-server-chile" />;
}
