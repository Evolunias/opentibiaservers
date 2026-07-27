import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-no-reset-server');
}

export default function Classicus12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-no-reset-server" />;
}
