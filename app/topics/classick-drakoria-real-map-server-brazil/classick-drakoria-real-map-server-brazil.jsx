import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-server-brazil');
}

export default function ClassickDrakoriaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-server-brazil" />;
}
