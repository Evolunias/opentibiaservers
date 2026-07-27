import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-highscores');
}

export default function OfficialZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-highscores" />;
}
