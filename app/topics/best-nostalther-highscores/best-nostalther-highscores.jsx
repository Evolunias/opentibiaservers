import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-highscores');
}

export default function BestNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-highscores" />;
}
