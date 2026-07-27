import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-highscores');
}

export default function FreshStartUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-highscores" />;
}
