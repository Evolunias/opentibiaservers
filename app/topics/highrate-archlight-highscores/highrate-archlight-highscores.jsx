import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-highscores');
}

export default function HighrateArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-highscores" />;
}
