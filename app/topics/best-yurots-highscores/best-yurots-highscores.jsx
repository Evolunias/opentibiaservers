import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-highscores');
}

export default function BestYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-highscores" />;
}
