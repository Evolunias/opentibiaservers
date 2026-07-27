import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-54-no-reset-server');
}

export default function ClassickDrakoria854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-54-no-reset-server" />;
}
