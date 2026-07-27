import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-server-mexico');
}

export default function ClassickDrakoriaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-server-mexico" />;
}
