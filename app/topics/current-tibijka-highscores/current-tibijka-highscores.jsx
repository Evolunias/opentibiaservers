import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-highscores');
}

export default function CurrentTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-highscores" />;
}
