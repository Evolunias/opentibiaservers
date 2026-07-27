import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-highscores');
}

export default function NewSeasonNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-highscores" />;
}
