import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-highscores');
}

export default function NewSeasonSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-highscores" />;
}
