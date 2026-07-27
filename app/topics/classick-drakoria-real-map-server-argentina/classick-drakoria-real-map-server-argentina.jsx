import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-server-argentina');
}

export default function ClassickDrakoriaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-server-argentina" />;
}
