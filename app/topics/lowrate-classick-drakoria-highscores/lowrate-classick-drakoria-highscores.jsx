import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-highscores');
}

export default function LowrateClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-highscores" />;
}
