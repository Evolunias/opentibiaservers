import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-highscores');
}

export default function ForteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fortera-highscores" />;
}
