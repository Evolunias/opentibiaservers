import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-highscores');
}

export default function FreshStartImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-highscores" />;
}
