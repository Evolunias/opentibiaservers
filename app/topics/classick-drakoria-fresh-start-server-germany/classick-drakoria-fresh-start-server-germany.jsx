import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-fresh-start-server-germany');
}

export default function ClassickDrakoriaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-fresh-start-server-germany" />;
}
