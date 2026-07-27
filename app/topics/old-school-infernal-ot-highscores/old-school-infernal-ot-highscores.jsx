import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-highscores');
}

export default function OldSchoolInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-highscores" />;
}
