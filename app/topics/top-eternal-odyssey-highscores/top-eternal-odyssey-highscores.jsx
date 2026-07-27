import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-highscores');
}

export default function TopEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-highscores" />;
}
