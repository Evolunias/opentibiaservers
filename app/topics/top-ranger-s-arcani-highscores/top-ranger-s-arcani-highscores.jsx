import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-highscores');
}

export default function TopRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-highscores" />;
}
