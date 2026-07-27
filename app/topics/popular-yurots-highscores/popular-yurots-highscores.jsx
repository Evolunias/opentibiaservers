import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-highscores');
}

export default function PopularYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-highscores" />;
}
