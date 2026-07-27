import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-highscores');
}

export default function CurrentLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-highscores" />;
}
