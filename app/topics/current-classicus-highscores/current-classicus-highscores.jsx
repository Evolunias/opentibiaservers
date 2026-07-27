import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-highscores');
}

export default function CurrentClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-highscores" />;
}
