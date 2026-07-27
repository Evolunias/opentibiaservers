import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-highscores');
}

export default function PopularEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-highscores" />;
}
