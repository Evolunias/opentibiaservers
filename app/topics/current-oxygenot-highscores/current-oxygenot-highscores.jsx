import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-highscores');
}

export default function CurrentOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-highscores" />;
}
