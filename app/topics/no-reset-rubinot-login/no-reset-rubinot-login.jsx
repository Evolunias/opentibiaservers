import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-login');
}

export default function NoResetRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-login" />;
}
