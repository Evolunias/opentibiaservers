import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-highscores');
}

export default function HighrateEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-highscores" />;
}
