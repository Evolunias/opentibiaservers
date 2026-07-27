import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-highscores');
}

export default function HighrateOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-highscores" />;
}
