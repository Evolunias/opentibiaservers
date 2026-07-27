import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-highscores');
}

export default function FreshStartInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-highscores" />;
}
