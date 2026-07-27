import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-guide');
}

export default function HighrateTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-guide" />;
}
