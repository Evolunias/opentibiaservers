import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-highscores');
}

export default function PopularRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-highscores" />;
}
