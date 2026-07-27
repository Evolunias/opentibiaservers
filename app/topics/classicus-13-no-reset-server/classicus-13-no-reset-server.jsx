import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-no-reset-server');
}

export default function Classicus13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-no-reset-server" />;
}
