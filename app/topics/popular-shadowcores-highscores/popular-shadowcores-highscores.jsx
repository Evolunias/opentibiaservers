import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-highscores');
}

export default function PopularShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-highscores" />;
}
