import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-server-poland');
}

export default function ClassickDrakoriaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-server-poland" />;
}
