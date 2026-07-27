import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-highscores');
}

export default function KasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="kasteria-highscores" />;
}
