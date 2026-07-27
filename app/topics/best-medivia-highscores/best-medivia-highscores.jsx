import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-highscores');
}

export default function BestMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-highscores" />;
}
