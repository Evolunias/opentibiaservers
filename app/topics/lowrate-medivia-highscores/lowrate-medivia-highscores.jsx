import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-highscores');
}

export default function LowrateMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-highscores" />;
}
