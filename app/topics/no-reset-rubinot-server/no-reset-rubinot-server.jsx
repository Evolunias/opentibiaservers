import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-server');
}

export default function NoResetRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-server" />;
}
