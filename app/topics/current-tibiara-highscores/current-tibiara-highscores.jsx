import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-highscores');
}

export default function CurrentTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-highscores" />;
}
