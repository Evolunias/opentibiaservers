import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-highscores');
}

export default function OfficialRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-highscores" />;
}
