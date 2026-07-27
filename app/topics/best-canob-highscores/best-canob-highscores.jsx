import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-highscores');
}

export default function BestCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-canob-highscores" />;
}
