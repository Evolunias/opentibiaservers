import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-chile');
}

export default function RubinotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-chile" />;
}
