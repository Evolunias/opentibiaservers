import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-highscores');
}

export default function TopMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-highscores" />;
}
