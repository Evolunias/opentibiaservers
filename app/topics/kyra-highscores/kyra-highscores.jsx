import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-highscores');
}

export default function KyraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="kyra-highscores" />;
}
