import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-fresh-start-server-europe');
}

export default function ClassickDrakoriaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-fresh-start-server-europe" />;
}
