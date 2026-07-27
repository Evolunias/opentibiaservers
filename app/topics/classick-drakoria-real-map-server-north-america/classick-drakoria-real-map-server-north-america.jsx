import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-server-north-america');
}

export default function ClassickDrakoriaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-server-north-america" />;
}
