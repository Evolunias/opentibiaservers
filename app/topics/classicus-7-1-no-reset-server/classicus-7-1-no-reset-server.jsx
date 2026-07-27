import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-no-reset-server');
}

export default function Classicus71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-no-reset-server" />;
}
