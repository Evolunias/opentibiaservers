import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-highscores');
}

export default function BestOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-highscores" />;
}
