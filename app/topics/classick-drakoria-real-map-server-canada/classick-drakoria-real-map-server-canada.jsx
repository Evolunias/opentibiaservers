import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-server-canada');
}

export default function ClassickDrakoriaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-server-canada" />;
}
