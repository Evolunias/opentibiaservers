import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-highscores');
}

export default function PopularCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-highscores" />;
}
