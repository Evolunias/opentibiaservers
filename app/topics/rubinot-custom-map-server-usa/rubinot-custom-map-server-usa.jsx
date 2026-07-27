import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-server-usa');
}

export default function RubinotCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-server-usa" />;
}
