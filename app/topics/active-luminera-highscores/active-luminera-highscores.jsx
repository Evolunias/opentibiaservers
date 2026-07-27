import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-highscores');
}

export default function ActiveLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-highscores" />;
}
