import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-no-reset-server');
}

export default function ClassickDrakoria76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-no-reset-server" />;
}
