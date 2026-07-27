import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-highscores');
}

export default function FreshStartSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-highscores" />;
}
