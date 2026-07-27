import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-highscores');
}

export default function LowrateTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-highscores" />;
}
