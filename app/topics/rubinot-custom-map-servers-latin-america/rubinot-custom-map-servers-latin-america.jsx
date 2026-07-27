import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-latin-america');
}

export default function RubinotCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-latin-america" />;
}
