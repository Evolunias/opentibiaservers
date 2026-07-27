import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-highscores');
}

export default function FreshStartOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-highscores" />;
}
