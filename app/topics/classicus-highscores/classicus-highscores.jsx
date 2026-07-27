import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-highscores');
}

export default function ClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="classicus-highscores" />;
}
