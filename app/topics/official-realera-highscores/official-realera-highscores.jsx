import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-highscores');
}

export default function OfficialRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-realera-highscores" />;
}
