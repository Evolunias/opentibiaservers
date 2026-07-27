import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map');
}

export default function ClassickDrakoriaRealMapKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map" />;
}
