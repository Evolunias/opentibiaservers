import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-no-reset-server');
}

export default function ClassickDrakoria15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-no-reset-server" />;
}
