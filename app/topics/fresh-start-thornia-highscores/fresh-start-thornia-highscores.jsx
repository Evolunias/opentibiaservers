import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-highscores');
}

export default function FreshStartThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-highscores" />;
}
