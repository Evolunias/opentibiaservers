import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-highscores');
}

export default function CustomMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-highscores" />;
}
