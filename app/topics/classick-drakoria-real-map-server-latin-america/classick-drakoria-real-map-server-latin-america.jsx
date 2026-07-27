import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-server-latin-america');
}

export default function ClassickDrakoriaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-server-latin-america" />;
}
