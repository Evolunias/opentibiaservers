import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-canob-highscores');
}

export default function Keyword2026CanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-canob-highscores" />;
}
