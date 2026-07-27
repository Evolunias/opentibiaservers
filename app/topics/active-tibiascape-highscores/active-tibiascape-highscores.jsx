import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-highscores');
}

export default function ActiveTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-highscores" />;
}
