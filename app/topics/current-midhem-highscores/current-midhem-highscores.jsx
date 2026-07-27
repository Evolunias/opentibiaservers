import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-highscores');
}

export default function CurrentMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-highscores" />;
}
