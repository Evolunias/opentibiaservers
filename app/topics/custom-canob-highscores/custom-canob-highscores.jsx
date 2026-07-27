import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-highscores');
}

export default function CustomCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-highscores" />;
}
