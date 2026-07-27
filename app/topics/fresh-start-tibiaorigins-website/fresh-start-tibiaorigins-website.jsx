import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-website');
}

export default function FreshStartTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-website" />;
}
