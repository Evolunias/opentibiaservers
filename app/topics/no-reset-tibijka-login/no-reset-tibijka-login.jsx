import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-login');
}

export default function NoResetTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-login" />;
}
