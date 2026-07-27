import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-highscores');
}

export default function CurrentBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-highscores" />;
}
