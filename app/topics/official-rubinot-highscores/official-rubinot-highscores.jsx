import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-highscores');
}

export default function OfficialRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-highscores" />;
}
