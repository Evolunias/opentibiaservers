import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-login');
}

export default function NoResetOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-login" />;
}
