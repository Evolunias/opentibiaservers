import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-highscores');
}

export default function LowrateCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-highscores" />;
}
