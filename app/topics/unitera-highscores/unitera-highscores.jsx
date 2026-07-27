import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-highscores');
}

export default function UniteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="unitera-highscores" />;
}
