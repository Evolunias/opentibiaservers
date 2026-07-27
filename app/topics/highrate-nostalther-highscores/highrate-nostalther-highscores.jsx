import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-highscores');
}

export default function HighrateNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-highscores" />;
}
