import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-highscores');
}

export default function HighrateRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-highscores" />;
}
