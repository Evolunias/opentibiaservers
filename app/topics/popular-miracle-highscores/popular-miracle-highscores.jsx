import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-highscores');
}

export default function PopularMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-highscores" />;
}
