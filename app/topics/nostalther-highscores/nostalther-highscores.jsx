import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-highscores');
}

export default function NostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="nostalther-highscores" />;
}
