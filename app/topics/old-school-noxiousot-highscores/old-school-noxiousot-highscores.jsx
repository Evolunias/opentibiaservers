import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-highscores');
}

export default function OldSchoolNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-highscores" />;
}
