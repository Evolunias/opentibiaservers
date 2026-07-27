import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-no-reset-server-germany');
}

export default function ClassickDrakoriaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-no-reset-server-germany" />;
}
