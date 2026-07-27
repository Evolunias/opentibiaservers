import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-highscores');
}

export default function NewSeasonNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-highscores" />;
}
