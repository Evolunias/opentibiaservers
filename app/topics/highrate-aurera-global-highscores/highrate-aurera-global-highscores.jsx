import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-highscores');
}

export default function HighrateAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-highscores" />;
}
