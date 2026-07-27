import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-highscores');
}

export default function PopularRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-highscores" />;
}
