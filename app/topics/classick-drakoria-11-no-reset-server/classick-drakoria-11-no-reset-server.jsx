import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-no-reset-server');
}

export default function ClassickDrakoria11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-no-reset-server" />;
}
