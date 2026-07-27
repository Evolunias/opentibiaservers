import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-highscores');
}

export default function NewSeasonOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-highscores" />;
}
