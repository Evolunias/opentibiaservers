import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-north-america');
}

export default function RubinotRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-north-america" />;
}
