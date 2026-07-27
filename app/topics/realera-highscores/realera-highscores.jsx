import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-highscores');
}

export default function RealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="realera-highscores" />;
}
