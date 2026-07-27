import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-highscores');
}

export default function TopMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-highscores" />;
}
