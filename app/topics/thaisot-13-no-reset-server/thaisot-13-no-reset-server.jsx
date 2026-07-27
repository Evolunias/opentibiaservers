import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-no-reset-server');
}

export default function Thaisot13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-no-reset-server" />;
}
