import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-no-reset-server');
}

export default function Classicus854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-no-reset-server" />;
}
