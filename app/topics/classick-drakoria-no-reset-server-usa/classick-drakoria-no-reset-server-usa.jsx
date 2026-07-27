import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-no-reset-server-usa');
}

export default function ClassickDrakoriaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-no-reset-server-usa" />;
}
