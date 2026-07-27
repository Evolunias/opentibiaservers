import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-map');
}

export default function RubinotMapKeywordPage() {
  return <StaticKeywordPage slug="rubinot-map" />;
}
