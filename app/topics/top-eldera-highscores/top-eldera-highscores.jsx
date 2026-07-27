import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-highscores');
}

export default function TopElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-highscores" />;
}
