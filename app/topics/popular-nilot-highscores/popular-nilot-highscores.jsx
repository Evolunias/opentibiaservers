import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-highscores');
}

export default function PopularNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-highscores" />;
}
