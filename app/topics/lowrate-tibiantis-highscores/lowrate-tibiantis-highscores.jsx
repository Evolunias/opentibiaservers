import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-highscores');
}

export default function LowrateTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-highscores" />;
}
