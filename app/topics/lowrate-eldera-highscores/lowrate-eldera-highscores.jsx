import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-highscores');
}

export default function LowrateElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-highscores" />;
}
