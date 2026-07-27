import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-usa');
}

export default function RubinotRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-usa" />;
}
