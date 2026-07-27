import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-highscores');
}

export default function NoResetArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-highscores" />;
}
