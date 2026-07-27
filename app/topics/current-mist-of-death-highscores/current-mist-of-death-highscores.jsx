import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-highscores');
}

export default function CurrentMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-highscores" />;
}
