import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-highscores');
}

export default function NewSeasonEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-highscores" />;
}
