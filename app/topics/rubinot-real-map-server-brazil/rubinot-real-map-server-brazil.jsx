import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-brazil');
}

export default function RubinotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-brazil" />;
}
