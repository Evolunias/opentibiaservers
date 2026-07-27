import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-highscores');
}

export default function NewSeasonYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-highscores" />;
}
