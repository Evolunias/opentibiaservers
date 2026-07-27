import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-highscores');
}

export default function LowrateOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-highscores" />;
}
