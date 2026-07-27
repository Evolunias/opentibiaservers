import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-no-reset-server');
}

export default function Thaisot74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-no-reset-server" />;
}
