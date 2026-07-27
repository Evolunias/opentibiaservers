import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-highscores');
}

export default function LowrateRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-highscores" />;
}
