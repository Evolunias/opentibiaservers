import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-highscores');
}

export default function CurrentTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-highscores" />;
}
