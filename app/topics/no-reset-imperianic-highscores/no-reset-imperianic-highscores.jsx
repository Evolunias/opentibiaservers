import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-highscores');
}

export default function NoResetImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-highscores" />;
}
