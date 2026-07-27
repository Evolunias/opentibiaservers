import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-4-no-reset-server');
}

export default function ClassickDrakoria84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-4-no-reset-server" />;
}
