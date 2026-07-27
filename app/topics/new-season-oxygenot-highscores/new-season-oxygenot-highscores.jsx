import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-highscores');
}

export default function NewSeasonOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-highscores" />;
}
