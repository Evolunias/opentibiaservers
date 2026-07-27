import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-highscores');
}

export default function BestImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-highscores" />;
}
