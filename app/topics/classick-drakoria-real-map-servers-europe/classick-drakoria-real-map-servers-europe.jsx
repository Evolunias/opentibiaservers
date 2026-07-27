import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-real-map-servers-europe');
}

export default function ClassickDrakoriaRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-real-map-servers-europe" />;
}
