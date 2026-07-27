import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-highscores');
}

export default function HighrateTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-highscores" />;
}
