import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-highscores');
}

export default function ActiveTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-highscores" />;
}
