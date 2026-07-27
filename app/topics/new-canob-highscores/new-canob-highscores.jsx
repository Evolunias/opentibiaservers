import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-highscores');
}

export default function NewCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-canob-highscores" />;
}
