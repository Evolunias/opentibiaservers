import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-highscores');
}

export default function PopularImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-highscores" />;
}
