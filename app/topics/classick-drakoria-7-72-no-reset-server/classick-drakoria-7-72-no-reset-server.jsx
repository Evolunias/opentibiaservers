import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-no-reset-server');
}

export default function ClassickDrakoria772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-no-reset-server" />;
}
