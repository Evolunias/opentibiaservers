import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-highscores');
}

export default function NewSeasonDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-highscores" />;
}
