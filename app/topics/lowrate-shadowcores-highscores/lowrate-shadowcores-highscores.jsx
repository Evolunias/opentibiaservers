import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-highscores');
}

export default function LowrateShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-highscores" />;
}
