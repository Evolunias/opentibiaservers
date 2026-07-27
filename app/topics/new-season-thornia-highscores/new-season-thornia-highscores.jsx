import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-highscores');
}

export default function NewSeasonThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-highscores" />;
}
