import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-highscores');
}

export default function NewKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-highscores" />;
}
