import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-highscores');
}

export default function LowrateInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-highscores" />;
}
