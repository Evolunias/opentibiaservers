import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-highscores');
}

export default function NewShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-highscores" />;
}
