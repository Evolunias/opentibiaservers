import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-argentina');
}

export default function ClassickDrakoriaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-argentina" />;
}
