import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-highscores');
}

export default function TopShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-highscores" />;
}
