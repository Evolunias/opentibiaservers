import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-no-reset-server');
}

export default function ClassickDrakoria14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-no-reset-server" />;
}
