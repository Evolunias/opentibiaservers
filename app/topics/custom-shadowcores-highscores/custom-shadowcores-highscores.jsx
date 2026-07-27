import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-highscores');
}

export default function CustomShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-highscores" />;
}
