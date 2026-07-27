import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-highscores');
}

export default function CurrentThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-highscores" />;
}
