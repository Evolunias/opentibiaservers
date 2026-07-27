import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-highscores');
}

export default function HighrateSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-highscores" />;
}
