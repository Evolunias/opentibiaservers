import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-highscores');
}

export default function HighrateClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-highscores" />;
}
