import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-ot-server');
}

export default function NoResetRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-ot-server" />;
}
