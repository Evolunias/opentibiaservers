import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-highscores');
}

export default function NewSeasonNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-highscores" />;
}
