import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-real-map');
}

export default function MyaacRealMapKeywordPage() {
  return <StaticKeywordPage slug="myaac-real-map" />;
}
