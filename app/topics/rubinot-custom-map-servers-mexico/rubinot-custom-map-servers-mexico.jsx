import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-mexico');
}

export default function RubinotCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-mexico" />;
}
