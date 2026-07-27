import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-highscores');
}

export default function HighrateBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-highscores" />;
}
