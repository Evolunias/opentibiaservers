import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-highscores');
}

export default function VineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="vinera-highscores" />;
}
