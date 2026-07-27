import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-server-canada');
}

export default function RubinotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-server-canada" />;
}
