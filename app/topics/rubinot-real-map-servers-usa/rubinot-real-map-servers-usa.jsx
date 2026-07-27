import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-usa');
}

export default function RubinotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-usa" />;
}
