import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-canada');
}

export default function ClassickDrakoriaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-canada" />;
}
