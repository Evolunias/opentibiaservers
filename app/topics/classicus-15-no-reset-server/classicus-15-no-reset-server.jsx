import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-no-reset-server');
}

export default function Classicus15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-no-reset-server" />;
}
