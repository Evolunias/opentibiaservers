import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-highscores');
}

export default function LowrateTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-highscores" />;
}
