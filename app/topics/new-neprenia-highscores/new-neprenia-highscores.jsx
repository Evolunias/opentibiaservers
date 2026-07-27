import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-highscores');
}

export default function NewNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-highscores" />;
}
