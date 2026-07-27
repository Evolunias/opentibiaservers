import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-highscores');
}

export default function MediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="medivia-highscores" />;
}
