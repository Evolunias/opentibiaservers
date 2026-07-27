import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-highscores');
}

export default function ThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="thornia-highscores" />;
}
