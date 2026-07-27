import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-highscores');
}

export default function CurrentNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-highscores" />;
}
