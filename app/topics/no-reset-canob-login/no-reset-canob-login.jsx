import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-login');
}

export default function NoResetCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-login" />;
}
