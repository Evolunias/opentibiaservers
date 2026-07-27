import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-highscores');
}

export default function OfficialEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-highscores" />;
}
