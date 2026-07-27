import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-highscores');
}

export default function TopCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-highscores" />;
}
