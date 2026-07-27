import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-usa');
}

export default function ClassickDrakoriaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-usa" />;
}
