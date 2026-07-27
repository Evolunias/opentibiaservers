import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-website');
}

export default function ActiveTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-website" />;
}
