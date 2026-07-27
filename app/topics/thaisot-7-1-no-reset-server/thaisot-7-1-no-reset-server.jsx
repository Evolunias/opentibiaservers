import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-1-no-reset-server');
}

export default function Thaisot71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-1-no-reset-server" />;
}
