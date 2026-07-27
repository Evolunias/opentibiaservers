import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-highscores');
}

export default function NewSeasonShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-highscores" />;
}
