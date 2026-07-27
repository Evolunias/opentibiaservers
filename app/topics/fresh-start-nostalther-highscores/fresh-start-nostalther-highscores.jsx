import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-highscores');
}

export default function FreshStartNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-highscores" />;
}
