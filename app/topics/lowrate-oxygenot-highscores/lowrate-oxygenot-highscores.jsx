import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-highscores');
}

export default function LowrateOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-highscores" />;
}
