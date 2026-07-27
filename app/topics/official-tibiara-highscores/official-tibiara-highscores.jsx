import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-highscores');
}

export default function OfficialTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-highscores" />;
}
