import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-no-reset-server');
}

export default function Thaisot76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-no-reset-server" />;
}
