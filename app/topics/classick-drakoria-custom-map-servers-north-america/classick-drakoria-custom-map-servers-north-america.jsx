import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-north-america');
}

export default function ClassickDrakoriaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-north-america" />;
}
