import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-uk');
}

export default function ClassickDrakoriaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-uk" />;
}
