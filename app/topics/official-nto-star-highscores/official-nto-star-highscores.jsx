import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-highscores');
}

export default function OfficialNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-highscores" />;
}
