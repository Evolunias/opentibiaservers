import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-highscores');
}

export default function OldSchoolZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-highscores" />;
}
