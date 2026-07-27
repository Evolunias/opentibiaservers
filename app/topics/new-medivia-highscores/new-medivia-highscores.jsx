import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-highscores');
}

export default function NewMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-highscores" />;
}
