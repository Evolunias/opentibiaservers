import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-highscores');
}

export default function LowrateZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-highscores" />;
}
