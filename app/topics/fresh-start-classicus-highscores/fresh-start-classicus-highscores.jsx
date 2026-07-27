import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-highscores');
}

export default function FreshStartClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-highscores" />;
}
