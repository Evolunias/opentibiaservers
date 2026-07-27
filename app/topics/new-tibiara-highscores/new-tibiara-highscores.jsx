import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-highscores');
}

export default function NewTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-highscores" />;
}
