import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-highscores');
}

export default function TopNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-highscores" />;
}
