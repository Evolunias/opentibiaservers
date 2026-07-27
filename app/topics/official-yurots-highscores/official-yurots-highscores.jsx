import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-highscores');
}

export default function OfficialYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-highscores" />;
}
