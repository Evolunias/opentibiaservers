import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-highscores');
}

export default function BestShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-highscores" />;
}
