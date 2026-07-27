import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-highscores');
}

export default function LowrateAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-highscores" />;
}
