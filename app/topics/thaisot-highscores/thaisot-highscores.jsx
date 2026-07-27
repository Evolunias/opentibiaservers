import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-highscores');
}

export default function ThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="thaisot-highscores" />;
}
