import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-highscores');
}

export default function TopTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-highscores" />;
}
