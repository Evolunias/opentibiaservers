import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-highscores');
}

export default function LowrateThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-highscores" />;
}
