import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-highscores');
}

export default function BestThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-highscores" />;
}
