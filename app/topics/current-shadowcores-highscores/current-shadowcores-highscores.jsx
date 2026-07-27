import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-highscores');
}

export default function CurrentShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-highscores" />;
}
