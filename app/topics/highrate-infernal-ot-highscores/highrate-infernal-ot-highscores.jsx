import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-highscores');
}

export default function HighrateInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-highscores" />;
}
