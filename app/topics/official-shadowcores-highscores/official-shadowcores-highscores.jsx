import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-highscores');
}

export default function OfficialShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-highscores" />;
}
