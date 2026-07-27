import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-highscores');
}

export default function OceraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="ocera-highscores" />;
}
