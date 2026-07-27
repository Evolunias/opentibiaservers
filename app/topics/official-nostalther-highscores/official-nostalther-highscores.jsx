import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-highscores');
}

export default function OfficialNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-highscores" />;
}
