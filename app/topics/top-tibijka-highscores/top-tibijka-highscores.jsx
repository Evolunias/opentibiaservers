import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-highscores');
}

export default function TopTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-highscores" />;
}
