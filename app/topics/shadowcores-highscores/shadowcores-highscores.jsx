import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-highscores');
}

export default function ShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-highscores" />;
}
