import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-highscores');
}

export default function PopularThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-highscores" />;
}
