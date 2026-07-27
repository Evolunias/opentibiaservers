import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-login');
}

export default function NoResetUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-login" />;
}
