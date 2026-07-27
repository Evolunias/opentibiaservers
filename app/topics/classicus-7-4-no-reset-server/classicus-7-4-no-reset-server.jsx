import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-no-reset-server');
}

export default function Classicus74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-no-reset-server" />;
}
