import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-no-reset-server');
}

export default function Thaisot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-no-reset-server" />;
}
