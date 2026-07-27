import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-highscores');
}

export default function PopularTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-highscores" />;
}
