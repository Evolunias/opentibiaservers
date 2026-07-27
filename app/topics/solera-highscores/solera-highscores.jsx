import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-highscores');
}

export default function SoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="solera-highscores" />;
}
