import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-high-exp-server-germany');
}

export default function ClassickDrakoriaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-high-exp-server-germany" />;
}
