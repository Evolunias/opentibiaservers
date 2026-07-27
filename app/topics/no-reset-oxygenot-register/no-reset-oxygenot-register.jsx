import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-register');
}

export default function NoResetOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-register" />;
}
