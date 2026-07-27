import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-highscores');
}

export default function TopTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-highscores" />;
}
