import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-highscores');
}

export default function NoResetTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-highscores" />;
}
