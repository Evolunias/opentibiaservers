import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-register');
}

export default function NoResetUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-register" />;
}
