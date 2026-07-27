import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-highscores');
}

export default function ImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="imperianic-highscores" />;
}
