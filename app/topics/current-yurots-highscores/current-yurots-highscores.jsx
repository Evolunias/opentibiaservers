import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-highscores');
}

export default function CurrentYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-highscores" />;
}
