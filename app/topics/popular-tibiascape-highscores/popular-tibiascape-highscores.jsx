import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-highscores');
}

export default function PopularTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-highscores" />;
}
