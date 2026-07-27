import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-poland');
}

export default function RubinotRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-poland" />;
}
