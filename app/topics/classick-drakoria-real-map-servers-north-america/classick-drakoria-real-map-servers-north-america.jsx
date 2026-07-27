import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-servers-north-america');
}

export default function ClassickDrakoriaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-servers-north-america" />;
}
