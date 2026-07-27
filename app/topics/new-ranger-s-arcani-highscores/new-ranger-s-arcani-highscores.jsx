import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-highscores');
}

export default function NewRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-highscores" />;
}
