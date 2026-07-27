import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-germany');
}

export default function ClassickDrakoriaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-germany" />;
}
