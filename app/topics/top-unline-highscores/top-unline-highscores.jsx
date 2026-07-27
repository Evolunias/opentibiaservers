import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-highscores');
}

export default function TopUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-unline-highscores" />;
}
