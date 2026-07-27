import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-highscores');
}

export default function NewTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-highscores" />;
}
