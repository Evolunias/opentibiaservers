import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-server-latin-america');
}

export default function RubinotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-server-latin-america" />;
}
