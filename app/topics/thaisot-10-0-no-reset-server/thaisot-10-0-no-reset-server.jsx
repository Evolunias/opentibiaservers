import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-no-reset-server');
}

export default function Thaisot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-no-reset-server" />;
}
