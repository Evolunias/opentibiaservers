import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-highscores');
}

export default function CurrentRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-highscores" />;
}
