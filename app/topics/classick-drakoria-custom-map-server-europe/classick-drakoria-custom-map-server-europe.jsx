import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-europe');
}

export default function ClassickDrakoriaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-europe" />;
}
