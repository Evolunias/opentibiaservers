import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-no-reset-server-poland');
}

export default function ClassickDrakoriaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-no-reset-server-poland" />;
}
