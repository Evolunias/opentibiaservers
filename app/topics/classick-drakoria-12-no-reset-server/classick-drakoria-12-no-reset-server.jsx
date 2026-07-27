import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-no-reset-server');
}

export default function ClassickDrakoria12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-no-reset-server" />;
}
