import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-highscores');
}

export default function CustomEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-highscores" />;
}
