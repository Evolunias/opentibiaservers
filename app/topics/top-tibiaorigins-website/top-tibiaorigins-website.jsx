import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-website');
}

export default function TopTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-website" />;
}
