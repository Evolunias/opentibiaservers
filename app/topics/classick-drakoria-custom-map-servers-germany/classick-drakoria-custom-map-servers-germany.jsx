import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-germany');
}

export default function ClassickDrakoriaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-germany" />;
}
