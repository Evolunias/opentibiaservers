import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-highscores');
}

export default function NewSeasonMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-highscores" />;
}
