import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-website');
}

export default function NoResetTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-website" />;
}
