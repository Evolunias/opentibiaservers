import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-highscores');
}

export default function OldSchoolAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-highscores" />;
}
