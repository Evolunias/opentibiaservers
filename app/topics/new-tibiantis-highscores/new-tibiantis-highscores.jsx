import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-highscores');
}

export default function NewTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-highscores" />;
}
