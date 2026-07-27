import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-highscores');
}

export default function NewSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-highscores" />;
}
