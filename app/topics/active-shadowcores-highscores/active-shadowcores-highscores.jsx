import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-highscores');
}

export default function ActiveShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-highscores" />;
}
