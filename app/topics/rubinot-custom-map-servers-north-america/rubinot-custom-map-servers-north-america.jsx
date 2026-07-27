import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-north-america');
}

export default function RubinotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-north-america" />;
}
