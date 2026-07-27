import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-highscores');
}

export default function TopClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-highscores" />;
}
