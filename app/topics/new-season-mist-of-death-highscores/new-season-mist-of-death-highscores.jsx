import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-highscores');
}

export default function NewSeasonMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-highscores" />;
}
