import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-server-usa');
}

export default function ClassickDrakoriaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-server-usa" />;
}
