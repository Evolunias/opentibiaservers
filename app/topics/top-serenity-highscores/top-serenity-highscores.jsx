import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-highscores');
}

export default function TopSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-highscores" />;
}
