import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-highscores');
}

export default function PopularClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-highscores" />;
}
