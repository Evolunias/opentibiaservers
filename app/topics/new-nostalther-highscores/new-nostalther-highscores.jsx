import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-highscores');
}

export default function NewNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-highscores" />;
}
