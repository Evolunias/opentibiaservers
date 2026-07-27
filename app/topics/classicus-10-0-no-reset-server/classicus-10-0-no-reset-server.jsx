import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-no-reset-server');
}

export default function Classicus100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-no-reset-server" />;
}
