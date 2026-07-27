import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-highscores');
}

export default function TopNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-highscores" />;
}
