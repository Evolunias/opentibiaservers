import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-highscores');
}

export default function FreshStartTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-highscores" />;
}
