import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-website');
}

export default function HighrateTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-website" />;
}
