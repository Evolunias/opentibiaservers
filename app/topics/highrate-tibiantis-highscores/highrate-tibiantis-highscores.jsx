import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-highscores');
}

export default function HighrateTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-highscores" />;
}
