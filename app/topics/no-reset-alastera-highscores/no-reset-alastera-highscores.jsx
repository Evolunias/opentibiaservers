import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-highscores');
}

export default function NoResetAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-highscores" />;
}
