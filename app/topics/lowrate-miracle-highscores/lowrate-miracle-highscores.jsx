import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-highscores');
}

export default function LowrateMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-highscores" />;
}
