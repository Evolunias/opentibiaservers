import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-highscores');
}

export default function FreshStartRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-highscores" />;
}
