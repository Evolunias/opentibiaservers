import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-highscores');
}

export default function LowrateHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-highscores" />;
}
