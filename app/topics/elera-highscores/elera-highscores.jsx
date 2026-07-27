import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-highscores');
}

export default function EleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="elera-highscores" />;
}
