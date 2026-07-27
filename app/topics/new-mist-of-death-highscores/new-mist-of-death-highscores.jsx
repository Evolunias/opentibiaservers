import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-highscores');
}

export default function NewMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-highscores" />;
}
