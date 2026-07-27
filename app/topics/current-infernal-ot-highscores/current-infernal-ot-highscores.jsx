import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-highscores');
}

export default function CurrentInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-highscores" />;
}
