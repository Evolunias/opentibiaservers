import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-highscores');
}

export default function CustomLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-highscores" />;
}
