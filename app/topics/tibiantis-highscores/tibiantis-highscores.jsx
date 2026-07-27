import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-highscores');
}

export default function TibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-highscores" />;
}
