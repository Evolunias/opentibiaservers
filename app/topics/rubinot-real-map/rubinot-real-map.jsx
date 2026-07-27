import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map');
}

export default function RubinotRealMapKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map" />;
}
