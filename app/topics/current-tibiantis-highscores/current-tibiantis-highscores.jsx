import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-highscores');
}

export default function CurrentTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-highscores" />;
}
