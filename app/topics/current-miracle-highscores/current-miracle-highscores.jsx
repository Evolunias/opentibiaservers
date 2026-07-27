import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-highscores');
}

export default function CurrentMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-highscores" />;
}
