import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-highscores');
}

export default function PremiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="premia-highscores" />;
}
