import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-highscores');
}

export default function PopularTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-highscores" />;
}
