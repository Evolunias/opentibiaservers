import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-highscores');
}

export default function OfficialInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-highscores" />;
}
