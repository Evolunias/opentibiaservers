import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-highscores');
}

export default function LowrateNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-highscores" />;
}
