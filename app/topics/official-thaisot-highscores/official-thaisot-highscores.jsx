import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-highscores');
}

export default function OfficialThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-highscores" />;
}
