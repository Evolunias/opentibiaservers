import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-highscores');
}

export default function CustomInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-highscores" />;
}
