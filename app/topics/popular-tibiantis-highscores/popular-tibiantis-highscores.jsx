import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-highscores');
}

export default function PopularTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-highscores" />;
}
