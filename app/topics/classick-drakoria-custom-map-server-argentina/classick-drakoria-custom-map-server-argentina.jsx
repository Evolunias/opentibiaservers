import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-argentina');
}

export default function ClassickDrakoriaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-argentina" />;
}
