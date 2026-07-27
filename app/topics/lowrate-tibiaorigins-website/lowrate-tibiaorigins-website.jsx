import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-website');
}

export default function LowrateTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-website" />;
}
