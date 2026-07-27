import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-highscores');
}

export default function NewSeasonCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-highscores" />;
}
