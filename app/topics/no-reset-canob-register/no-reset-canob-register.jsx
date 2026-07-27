import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-register');
}

export default function NoResetCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-register" />;
}
