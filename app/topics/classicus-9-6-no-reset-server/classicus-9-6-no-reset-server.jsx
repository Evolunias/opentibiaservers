import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-no-reset-server');
}

export default function Classicus96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-no-reset-server" />;
}
