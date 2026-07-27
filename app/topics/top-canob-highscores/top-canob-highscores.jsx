import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-highscores');
}

export default function TopCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-canob-highscores" />;
}
