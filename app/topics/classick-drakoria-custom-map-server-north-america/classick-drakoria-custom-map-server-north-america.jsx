import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-north-america');
}

export default function ClassickDrakoriaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-north-america" />;
}
