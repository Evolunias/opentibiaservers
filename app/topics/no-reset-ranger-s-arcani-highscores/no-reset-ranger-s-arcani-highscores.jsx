import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-highscores');
}

export default function NoResetRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-highscores" />;
}
