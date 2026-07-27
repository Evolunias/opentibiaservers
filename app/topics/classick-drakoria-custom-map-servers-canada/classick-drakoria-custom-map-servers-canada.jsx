import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-canada');
}

export default function ClassickDrakoriaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-canada" />;
}
