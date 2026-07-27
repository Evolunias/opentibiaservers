import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-no-reset-server');
}

export default function Thaisot96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-no-reset-server" />;
}
