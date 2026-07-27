import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-highscores');
}

export default function TopRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-highscores" />;
}
