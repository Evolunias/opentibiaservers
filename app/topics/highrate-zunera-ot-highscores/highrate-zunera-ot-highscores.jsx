import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-highscores');
}

export default function HighrateZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-highscores" />;
}
