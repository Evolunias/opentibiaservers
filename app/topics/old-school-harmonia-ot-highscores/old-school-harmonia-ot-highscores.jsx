import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-highscores');
}

export default function OldSchoolHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-highscores" />;
}
