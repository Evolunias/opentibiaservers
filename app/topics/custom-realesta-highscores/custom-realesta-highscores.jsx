import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-highscores');
}

export default function CustomRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-highscores" />;
}
