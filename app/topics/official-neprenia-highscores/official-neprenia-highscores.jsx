import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-highscores');
}

export default function OfficialNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-highscores" />;
}
