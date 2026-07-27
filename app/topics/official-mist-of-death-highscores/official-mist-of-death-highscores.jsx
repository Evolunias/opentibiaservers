import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-highscores');
}

export default function OfficialMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-highscores" />;
}
