import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-highscores');
}

export default function OfficialOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-highscores" />;
}
