import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-highscores');
}

export default function LowrateNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-highscores" />;
}
