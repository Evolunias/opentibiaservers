import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-highscores');
}

export default function NewOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-highscores" />;
}
