import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-ot-server');
}

export default function NoResetThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-ot-server" />;
}
