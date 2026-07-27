import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-no-reset-server');
}

export default function Classicus86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-no-reset-server" />;
}
