import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-highscores');
}

export default function ClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-highscores" />;
}
