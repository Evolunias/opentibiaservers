import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-highscores');
}

export default function OfficialMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-highscores" />;
}
