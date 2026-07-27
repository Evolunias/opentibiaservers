import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-highscores');
}

export default function OfficialImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-highscores" />;
}
