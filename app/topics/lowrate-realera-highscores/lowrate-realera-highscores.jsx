import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-highscores');
}

export default function LowrateRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-highscores" />;
}
