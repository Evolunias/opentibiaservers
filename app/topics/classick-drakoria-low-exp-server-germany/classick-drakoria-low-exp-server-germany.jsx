import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-low-exp-server-germany');
}

export default function ClassickDrakoriaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-low-exp-server-germany" />;
}
