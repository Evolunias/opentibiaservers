import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-ot-server');
}

export default function NoResetYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-ot-server" />;
}
