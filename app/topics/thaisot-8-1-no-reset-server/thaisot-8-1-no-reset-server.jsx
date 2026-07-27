import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-1-no-reset-server');
}

export default function Thaisot81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-1-no-reset-server" />;
}
