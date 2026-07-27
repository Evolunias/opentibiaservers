import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-register');
}

export default function NoResetRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-register" />;
}
