import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-no-reset-server');
}

export default function Classicus14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-no-reset-server" />;
}
