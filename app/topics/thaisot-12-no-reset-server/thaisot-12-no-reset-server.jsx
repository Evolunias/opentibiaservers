import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-no-reset-server');
}

export default function Thaisot12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-no-reset-server" />;
}
