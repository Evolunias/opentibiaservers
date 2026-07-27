import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-high-exp-server-europe');
}

export default function ClassickDrakoriaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-high-exp-server-europe" />;
}
