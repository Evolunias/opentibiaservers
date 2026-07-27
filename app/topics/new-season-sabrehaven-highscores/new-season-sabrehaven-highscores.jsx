import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-highscores');
}

export default function NewSeasonSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-highscores" />;
}
