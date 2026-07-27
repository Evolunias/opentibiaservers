import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-europe');
}

export default function ClassickDrakoriaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-europe" />;
}
