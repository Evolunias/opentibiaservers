import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-highscores');
}

export default function OfficialDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-highscores" />;
}
