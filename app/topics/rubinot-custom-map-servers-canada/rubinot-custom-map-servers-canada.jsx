import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-canada');
}

export default function RubinotCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-canada" />;
}
