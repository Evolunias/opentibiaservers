import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-highscores');
}

export default function PopularNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-highscores" />;
}
