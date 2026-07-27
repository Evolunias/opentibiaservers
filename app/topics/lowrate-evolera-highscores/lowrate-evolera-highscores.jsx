import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-highscores');
}

export default function LowrateEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-highscores" />;
}
