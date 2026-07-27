import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-highscores');
}

export default function NewSeasonRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-highscores" />;
}
