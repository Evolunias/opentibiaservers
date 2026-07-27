import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-highscores');
}

export default function NoResetShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-highscores" />;
}
