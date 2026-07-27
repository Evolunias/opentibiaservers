import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-highscores');
}

export default function BestMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-highscores" />;
}
