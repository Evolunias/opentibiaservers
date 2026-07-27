import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-highscores');
}

export default function OfficialOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-highscores" />;
}
