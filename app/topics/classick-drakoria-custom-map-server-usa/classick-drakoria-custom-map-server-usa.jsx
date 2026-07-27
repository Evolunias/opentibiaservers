import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-usa');
}

export default function ClassickDrakoriaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-usa" />;
}
