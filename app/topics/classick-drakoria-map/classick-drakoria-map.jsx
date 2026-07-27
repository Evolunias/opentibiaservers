import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-map');
}

export default function ClassickDrakoriaMapKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-map" />;
}
