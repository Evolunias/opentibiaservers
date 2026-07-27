import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-highscores');
}

export default function PopularThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-highscores" />;
}
