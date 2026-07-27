import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-highscores');
}

export default function BestSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-highscores" />;
}
