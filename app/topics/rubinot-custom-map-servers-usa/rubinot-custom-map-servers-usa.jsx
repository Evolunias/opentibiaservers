import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-usa');
}

export default function RubinotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-usa" />;
}
