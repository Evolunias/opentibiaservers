import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-login');
}

export default function NoResetYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-login" />;
}
