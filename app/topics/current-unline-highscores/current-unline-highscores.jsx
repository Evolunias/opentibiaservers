import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-highscores');
}

export default function CurrentUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-unline-highscores" />;
}
