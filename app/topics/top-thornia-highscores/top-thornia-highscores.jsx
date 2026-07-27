import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-highscores');
}

export default function TopThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-highscores" />;
}
