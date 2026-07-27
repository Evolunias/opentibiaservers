import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-highscores');
}

export default function TopYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-highscores" />;
}
