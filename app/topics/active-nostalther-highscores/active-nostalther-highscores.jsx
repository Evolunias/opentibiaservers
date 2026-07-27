import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-highscores');
}

export default function ActiveNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-highscores" />;
}
