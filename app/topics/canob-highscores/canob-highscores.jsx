import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-highscores');
}

export default function CanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="canob-highscores" />;
}
