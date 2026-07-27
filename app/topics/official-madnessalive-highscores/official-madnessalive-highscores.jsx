import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-highscores');
}

export default function OfficialMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-highscores" />;
}
