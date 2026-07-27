import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-highscores');
}

export default function TibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="tibiara-highscores" />;
}
