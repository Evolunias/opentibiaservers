import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-highscores');
}

export default function FreshStartShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-highscores" />;
}
