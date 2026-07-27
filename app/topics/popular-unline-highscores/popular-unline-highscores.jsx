import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-highscores');
}

export default function PopularUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-highscores" />;
}
