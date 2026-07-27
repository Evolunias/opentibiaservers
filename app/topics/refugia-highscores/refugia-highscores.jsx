import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-highscores');
}

export default function RefugiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="refugia-highscores" />;
}
