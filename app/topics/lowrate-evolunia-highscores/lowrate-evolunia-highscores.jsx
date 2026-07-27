import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-highscores');
}

export default function LowrateEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-highscores" />;
}
