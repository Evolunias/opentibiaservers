import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-highscores');
}

export default function TopOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-highscores" />;
}
