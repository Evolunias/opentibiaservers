import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-highscores');
}

export default function BestRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-highscores" />;
}
