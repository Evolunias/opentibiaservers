import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-highscores');
}

export default function LowrateTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-highscores" />;
}
