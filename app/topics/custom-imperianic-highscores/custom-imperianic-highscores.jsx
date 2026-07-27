import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-highscores');
}

export default function CustomImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-highscores" />;
}
