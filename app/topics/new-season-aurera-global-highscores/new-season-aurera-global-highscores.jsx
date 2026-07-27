import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-highscores');
}

export default function NewSeasonAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-highscores" />;
}
