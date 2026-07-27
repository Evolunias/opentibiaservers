import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-no-reset-server');
}

export default function ClassickDrakoria81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-no-reset-server" />;
}
