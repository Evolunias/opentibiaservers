import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-highscores');
}

export default function HighrateCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-highscores" />;
}
