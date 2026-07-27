import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-highscores');
}

export default function HighrateHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-highscores" />;
}
