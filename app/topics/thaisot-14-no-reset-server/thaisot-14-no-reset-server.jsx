import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-no-reset-server');
}

export default function Thaisot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-no-reset-server" />;
}
