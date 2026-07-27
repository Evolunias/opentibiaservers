import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-login');
}

export default function NoResetTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-login" />;
}
