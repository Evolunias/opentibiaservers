import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-highscores');
}

export default function NewSeasonSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-highscores" />;
}
