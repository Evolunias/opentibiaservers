import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-no-reset-server');
}

export default function Thaisot84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-no-reset-server" />;
}
