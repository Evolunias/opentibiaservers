import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-highscores');
}

export default function OfficialAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-highscores" />;
}
