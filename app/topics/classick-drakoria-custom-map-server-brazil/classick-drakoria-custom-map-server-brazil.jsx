import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-brazil');
}

export default function ClassickDrakoriaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-brazil" />;
}
