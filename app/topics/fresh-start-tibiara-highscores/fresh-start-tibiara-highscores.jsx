import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-highscores');
}

export default function FreshStartTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-highscores" />;
}
