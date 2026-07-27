import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-register');
}

export default function NoResetTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-register" />;
}
