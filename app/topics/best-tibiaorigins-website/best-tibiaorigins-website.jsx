import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-website');
}

export default function BestTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-website" />;
}
