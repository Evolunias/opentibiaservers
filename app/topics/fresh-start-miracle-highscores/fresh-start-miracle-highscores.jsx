import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-highscores');
}

export default function FreshStartMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-highscores" />;
}
