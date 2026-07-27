import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-highscores');
}

export default function LowrateRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-highscores" />;
}
