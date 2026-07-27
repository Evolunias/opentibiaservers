import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-highscores');
}

export default function CustomTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-highscores" />;
}
