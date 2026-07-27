import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-no-reset-server');
}

export default function Thaisot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-no-reset-server" />;
}
