import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-highscores');
}

export default function NoResetSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-highscores" />;
}
