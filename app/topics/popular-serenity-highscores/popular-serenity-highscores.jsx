import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-highscores');
}

export default function PopularSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-highscores" />;
}
