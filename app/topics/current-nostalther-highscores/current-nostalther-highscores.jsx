import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-highscores');
}

export default function CurrentNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-highscores" />;
}
