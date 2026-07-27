import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-highscores');
}

export default function OldSchoolShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-highscores" />;
}
