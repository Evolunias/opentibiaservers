import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-highscores');
}

export default function NewSeasonKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-highscores" />;
}
