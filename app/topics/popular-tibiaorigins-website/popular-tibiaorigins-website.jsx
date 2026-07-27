import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-website');
}

export default function PopularTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-website" />;
}
