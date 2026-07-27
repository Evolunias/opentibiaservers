import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-highscores');
}

export default function ActiveImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-highscores" />;
}
