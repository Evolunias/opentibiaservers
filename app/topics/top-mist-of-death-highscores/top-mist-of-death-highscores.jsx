import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-highscores');
}

export default function TopMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-highscores" />;
}
