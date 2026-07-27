import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-highscores');
}

export default function ActiveRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-highscores" />;
}
