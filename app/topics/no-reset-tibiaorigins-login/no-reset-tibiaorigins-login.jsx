import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-login');
}

export default function NoResetTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-login" />;
}
