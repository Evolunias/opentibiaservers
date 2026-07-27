import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-highscores');
}

export default function SerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="serenity-highscores" />;
}
