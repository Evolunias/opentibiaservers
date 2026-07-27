import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-highscores');
}

export default function TopSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-highscores" />;
}
