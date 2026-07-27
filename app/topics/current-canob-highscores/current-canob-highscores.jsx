import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-highscores');
}

export default function CurrentCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-canob-highscores" />;
}
