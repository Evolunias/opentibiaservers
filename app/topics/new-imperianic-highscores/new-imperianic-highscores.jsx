import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-highscores');
}

export default function NewImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-highscores" />;
}
