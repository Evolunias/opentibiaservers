import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-website');
}

export default function CurrentTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-website" />;
}
