import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-highscores');
}

export default function HighrateShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-highscores" />;
}
