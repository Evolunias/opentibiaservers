import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-highscores');
}

export default function CurrentThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-highscores" />;
}
