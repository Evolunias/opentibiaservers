import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-highscores');
}

export default function ActiveKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-highscores" />;
}
