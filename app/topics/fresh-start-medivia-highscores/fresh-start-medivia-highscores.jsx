import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-highscores');
}

export default function FreshStartMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-highscores" />;
}
