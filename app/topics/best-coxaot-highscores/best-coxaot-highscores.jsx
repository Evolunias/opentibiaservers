import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-highscores');
}

export default function BestCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-highscores" />;
}
