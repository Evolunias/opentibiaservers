import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-germany');
}

export default function RubinotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-germany" />;
}
