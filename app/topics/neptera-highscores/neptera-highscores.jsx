import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-highscores');
}

export default function NepteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="neptera-highscores" />;
}
