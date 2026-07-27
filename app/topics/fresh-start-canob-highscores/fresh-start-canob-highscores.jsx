import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-highscores');
}

export default function FreshStartCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-highscores" />;
}
