import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-guide');
}

export default function NoResetTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-guide" />;
}
