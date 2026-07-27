import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-low-exp-server-europe');
}

export default function ClassickDrakoriaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-low-exp-server-europe" />;
}
