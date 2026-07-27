import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-highscores');
}

export default function NewInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-highscores" />;
}
