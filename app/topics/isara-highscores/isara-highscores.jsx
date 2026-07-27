import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-highscores');
}

export default function IsaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="isara-highscores" />;
}
