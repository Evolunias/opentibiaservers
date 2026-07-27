import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-no-reset-server');
}

export default function ClassickDrakoria96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-no-reset-server" />;
}
