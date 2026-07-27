import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-highscores');
}

export default function ActiveInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-highscores" />;
}
