import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-server-mexico');
}

export default function RubinotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-server-mexico" />;
}
