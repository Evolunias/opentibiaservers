import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-highscores');
}

export default function OfficialEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-highscores" />;
}
