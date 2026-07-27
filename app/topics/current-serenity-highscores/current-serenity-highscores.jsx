import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-highscores');
}

export default function CurrentSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-highscores" />;
}
