import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-highscores');
}

export default function NewSeasonUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-highscores" />;
}
