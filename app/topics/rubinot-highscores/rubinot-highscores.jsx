import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-highscores');
}

export default function RubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="rubinot-highscores" />;
}
