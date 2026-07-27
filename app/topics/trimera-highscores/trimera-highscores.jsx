import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-highscores');
}

export default function TrimeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="trimera-highscores" />;
}
