import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-highscores');
}

export default function FreshStartRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-highscores" />;
}
