import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-server-north-america');
}

export default function RubinotCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-server-north-america" />;
}
