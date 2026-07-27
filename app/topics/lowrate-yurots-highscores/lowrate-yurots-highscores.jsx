import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-highscores');
}

export default function LowrateYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-highscores" />;
}
