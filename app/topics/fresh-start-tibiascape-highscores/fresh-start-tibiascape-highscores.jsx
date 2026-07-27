import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-highscores');
}

export default function FreshStartTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-highscores" />;
}
