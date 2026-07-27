import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-highscores');
}

export default function CustomTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-highscores" />;
}
