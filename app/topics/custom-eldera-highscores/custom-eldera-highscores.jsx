import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-highscores');
}

export default function CustomElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-highscores" />;
}
