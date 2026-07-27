import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-highscores');
}

export default function CustomNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-highscores" />;
}
