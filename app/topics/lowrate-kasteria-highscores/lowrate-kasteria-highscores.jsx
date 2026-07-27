import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-highscores');
}

export default function LowrateKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-highscores" />;
}
