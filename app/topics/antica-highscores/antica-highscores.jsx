import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-highscores');
}

export default function AnticaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="antica-highscores" />;
}
