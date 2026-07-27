import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-highscores');
}

export default function HoneraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="honera-highscores" />;
}
