import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-highscores');
}

export default function PopularCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-highscores" />;
}
