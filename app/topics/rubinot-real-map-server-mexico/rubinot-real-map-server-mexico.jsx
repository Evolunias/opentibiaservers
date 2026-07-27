import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-mexico');
}

export default function RubinotRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-mexico" />;
}
