import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-highscores');
}

export default function RuberaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="rubera-highscores" />;
}
