import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-highscores');
}

export default function NewSeasonTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-highscores" />;
}
