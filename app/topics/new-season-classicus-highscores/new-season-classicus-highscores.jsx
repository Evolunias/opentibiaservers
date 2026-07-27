import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-highscores');
}

export default function NewSeasonClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-highscores" />;
}
